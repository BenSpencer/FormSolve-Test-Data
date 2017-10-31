#!/usr/bin/env python
"""
Generates random strings from a context free grammar.

Works according to the algorithm from:
"Generating Strings at Random from a Context Free Grammar", Bruce McKenzie, 1997.
http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.32.8707

The intuition for this technique is explained a bit more in:
"The Generation of Strings from a CFG using a Functional Language", Bruce McKenzie, 1997. (Section 3 in particular.)
http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.37.7262
"""

import sys
import collections
import numpy.random
import itertools
import math
try:
    import nltk.grammar
except ImportError:
    print "Module 'nltk' is required."
    print "Try 'sudo pip install nltk' or see http://www.nltk.org/install.html"
    sys.exit()
try:
    import tabulate
except ImportError:
    print "Module 'tabulate' is required."
    print "Try 'sudo pip install tabulate' or see https://pypi.python.org/pypi/tabulate"
    sys.exit()
try:
    import scipy.stats
except ImportError:
    print "Module 'scipy' is required."
    print "Try 'sudo apt-get install python-scipy' or see https://www.scipy.org/install.html"
    sys.exit()

import memoized
import cfghelpers



class TerminalString:
    @staticmethod
    def terminal(x):
        val = TerminalString()
        val._string = [x]
        return val
    
    @staticmethod
    def concat(x, ys):
        assert isinstance(x, TerminalString)
        assert isinstance(ys, TerminalString)
        val = TerminalString()
        val._string = x._string
        val._string.extend(ys._string)
        return val
    
    @staticmethod
    def nonterminal_expansion(x):
        assert isinstance(x, TerminalString)
        return x
    
    def __str__(self):
        return "".join(map(str, self._string))
    
    def __len__(self):
        return len(self._string)
    
    def as_list(self):
        return self._string
    

class TerminalParseTree:
    @staticmethod
    def terminal(x):
        val = TerminalParseTree()
        val._parse_tree = [x]
        return val
    
    @staticmethod
    def concat(x, ys):
        assert isinstance(x, TerminalParseTree)
        assert isinstance(ys, TerminalParseTree)
        val = TerminalParseTree()
        val._parse_tree = x._parse_tree + ys._parse_tree
        return val
    
    @staticmethod
    def nonterminal_expansion(x):
        assert isinstance(x, TerminalParseTree)
        val = TerminalParseTree()
        val._parse_tree = [x._parse_tree]
        return val
    
    def parse_tree(self):
        return self._parse_tree
    
    def __str__(self):
        return str(self._parse_tree)
    
    def __len__(self):
        # Returns the number of terminals in the flattened tree.
        # This means it returns the same as an equivalent TerminalString.
        return len(self.flatten())
    
    def flatten(self, markers=None, to_str=False, markers_on_singletons=True):
        """
        Flatten the parse tree into a single list.
        
        If markers is specified, it must be a tuple, where the two items are used to wrap nested parts of the tree in
        the flattened list.
        """
        assert (markers is None) or (len(markers) == 2)
        
        def islist(xs):
            return isinstance(xs, collections.Iterable) and not isinstance(xs, basestring)
        def _flatten(xs):
            result = []
            for x in xs:
                if islist(x):
                    children = _flatten(x)
                    if markers is None or (not markers_on_singletons and len(children) <= 1):
                        result.extend(children)
                    else:
                        result.append(markers[0])
                        result.extend(children)
                        result.append(markers[1])
                else:
                    if to_str:
                        result.append(str(x))
                    else:
                        result.append(x)
            return result
        
        if to_str:
            return "".join(_flatten(self._parse_tree))
        else:
            return _flatten(self._parse_tree)
    


class CFGSampler:
    """
    Wraps a context free grammar and generates random strings from it.
    
    Works with nltk.grammar.CFG, but not the probabilistic CFG.
    The CFG should not be modified after wrapping with CFGSampler.
    """
    
    def __init__(self, cfg, random_seed=None):
        self.cfg = cfg
        self._check_preconditions()
        
        # NumPy requires the seed to be an integer in the range 0 to 2**32-1
        numpy_seed = random_seed % (2**32) if random_seed is not None else None
        self._random = numpy.random.RandomState(numpy_seed)
        
        self.ordered_nonterminals, self.productions = self._grouped_productions_from_cfg()
        assert(len(self.ordered_nonterminals) == len(self.productions))
        # Where it is defined, productions[i][*].lhs() == ordered_nonterminals[i]
        
    
    def _check_preconditions(self):
        """
        Check the required conditions on the CFG.
        That is, that there are no empty productions in the CFG.
        
        In order for the probabilities of generating each string of the same length to be equal, there is another
        condition: the grammar must be unambiguous (that is, there is only one way to generate a given string).
        Checking ambiguity is undecidable in general, so we do not enforce it. If the grammar is ambiguous, the only
        problem is that strings which can be generated multiple ways will be counted multiple times when calculating
        the probabilities.
        """
        if not self.cfg.is_nonempty():
            raise CFGSampler.CFGError("The CFG is empty or contains empty productions.")
    
    def _grouped_productions_from_cfg(self):
        """
        Extracts the productions from the CFG and returns a list of the LHS nonterminals in a fixed order and list of
        lists of the productions.
        Each top-level list represents a single nonterminal on the LHS.
        Each sub-list gives all the productions which have that nonterminal on the LHS.
        """
        productions_by_lhs = collections.defaultdict(list)
        for p in self.cfg.productions():
            assert(isinstance(p.lhs(), nltk.grammar.Nonterminal))
            productions_by_lhs[p.lhs()].append(p)
        
        # Also account for "unproductive" nonterminals which do not appear on the LHS of any production.
        # TODO: Not clear if these should be included or not.
        for p in self.cfg.productions():
            for x in p.rhs():
                if isinstance(x, nltk.grammar.Nonterminal) and x not in productions_by_lhs:
                    productions_by_lhs[x] = []
        
        # We need to define a nonterminal ordering (arbitrarily), so convert the dict-of-lists to a list-of-lists.
        ordered_nonterminals = productions_by_lhs.keys()
        result = []
        for lhs in ordered_nonterminals:
            result.append(productions_by_lhs[lhs])
        return ordered_nonterminals, result
    
    # The following functions follow the notation of the paper as closely as possible.
    # N.B. The paper notation is 1-indexed, but our lists are 0-indexed.
    # The arguments to these functions follow the paper, so we have to transform the indices.
    
    @memoized.memoized
    def s(self, i):
        """
        Returns the number of productions with an LHS of N_i.
        That is, the number of production options for the i-th nonterminal.
        """
        assert(1 <= i <= len(self.productions))
        return len(self.productions[i-1])
    
    @memoized.memoized
    def t(self, i, j):
        """
        Returns the length (number of terms) in the RHS of the j-th production with LHS N_i (the i-th nonterminal).
        """
        assert(1 <= i <= len(self.productions))
        assert(1 <= j <= self.s(i))
        return len(self.productions[i-1][j-1].rhs())
    
    @memoized.memoized
    def N(self, i):
        """
        Returns the i-th nonterminal symbol
        """
        assert(1 <= i <= len(self.ordered_nonterminals))
        return self.ordered_nonterminals[i-1]
    
    @memoized.memoized
    def a(self, i, j):
        """
        Returns the RHS (a list of symbols) of the j-th production with LHS N_i (the i-th nonterminal).
        """
        assert(1 <= i <= len(self.productions))
        assert(1 <= j <= self.s(i))
        return self.productions[i-1][j-1].rhs()
    
    @memoized.memoized
    def x(self, i, j, k):
        """
        Returns the k-th item in the RHS of the j-th production with LHS n_i (the i-th nonterminal).
        """
        assert(1 <= i <= len(self.productions))
        assert(1 <= j <= self.s(i))
        assert(1 <= k <= self.t(i, j))
        return self.a(i, j)[k-1]
    
    @memoized.memoized
    def f(self, i, n):
        """
        Return a list giving the number of strings generated for each production N_i -> a_{i,j}.
        """
        return [sum(self.f_prime(i, j, 1, n)) for j in _inclusive_range(1, self.s(i))]
    
    @memoized.memoized
    def f_prime(self, i, j, k, n):
        """
        Return the number of strings of length n generated by the final symbols x_{i,j,k} ... x_{i,j,t_{i,j}} from
        the right hand side of the production P_{i,j}, N_i -> x_{i,j,1} ... x{i,j,t_{i,j}} for each of the possible
        ways in which the n terminals can be split between the first symbol x_{i,j,k} and the remaining symbols.
        """
        if n == 0:
            return []
        x_ijk = self.x(i, j, k)
        t_ij = self.t(i, j)
        if self._is_terminal(x_ijk):
            if k == t_ij:
                if n == 1:
                    return [1]
                else:
                    return [0]
            else:
                return [sum(self.f_prime(i, j, k+1, n-1))]
        else: # This else is not included in the paper, but is implied by the above return statements.
            x_ijk_idx = self._nonterminal_index(x_ijk)
            if k == t_ij:
                return [sum(self.f(x_ijk_idx, n))]
            else:
                return [sum(self.f(x_ijk_idx, l)) * sum(self.f_prime(i, j, k+1, n-l)) for l in _inclusive_range(1, n - t_ij + k)]
        
        assert False, "Not reached"
        
    
    def g(self, i, n):
        """
        Generate a string of length n uniformly at random from a nonterminal N_i.
        
        Returns an object of type expression_builder.
        """
        fin = self.f(i, n)
        if all([x == 0 for x in fin]):
            # Then there are no possible strings which can be generated of length n.
            # This should be impossible when called from g_prime.
            raise CFGSampler.GenerationError("No string of length {} can be generated from production N_{}.".format(n, i))
        
        r = self.choose(fin)
        return self._expression_builder.nonterminal_expansion(self.g_prime(i, r, 1, n))
    
    def choose(self, l):
        """
        Given the list l = [l_1, l_2, ..., l_m], return an index i between 1 and m at random with probability
        l_i / sum(l).
        """
        assert l is not []
        assert all([w >= 0 for w in l]) # We do not expect negative weights - they should be counts.
        assert not all([w == 0 for w in l]) # If they are all 0, we can't make a probability distribution.
        
        probs = cfghelpers.to_prob_dist(l)
        indices = _inclusive_range(1, len(l))
        return self._random.choice(indices, p=probs)
    
    def g_prime(self, i, j, k, n):
        """
        Generate a string of length n uniformly at random from among all strings derivable from the symbols
        x_{ijk} ... x_{ij{t_ij}} taken from the RHS of the production N_i -> a_ij
        
        Returns an object of type expression_builder.
        """
        x_ijk = self.x(i, j, k)
        t_ij = self.t(i, j)
        if self._is_terminal(x_ijk):
            if k == t_ij:
                return self._expression_builder.terminal(x_ijk)
            else:
                return self._expression_builder.concat(self._expression_builder.terminal(x_ijk), self.g_prime(i, j, k+1, n-1))
        else: # This else is not included in the paper, but is implied by the above return statements.
            x_ijk_idx = self._nonterminal_index(x_ijk)
            if k == t_ij:
                return self.g(x_ijk_idx, n)
            else:
                l = self.choose(self.f_prime(i, j, k, n))
                return self._expression_builder.concat(self.g(x_ijk_idx, l), self.g_prime(i, j, k+1, n-l))
        
        assert False, "Not reached"
    
    def _is_terminal(self, t):
        # Sanity check that the two ways to check are always the same.
        assert(isinstance(t, nltk.grammar.Nonterminal) == (t in self.ordered_nonterminals))
        return t not in self.ordered_nonterminals
    
    def _nonterminal_index(self, N):
        """
        Returns the index i of a nonterminal symbol N_i.
        """
        assert(N in self.ordered_nonterminals)
        idx = self.ordered_nonterminals.index(N) + 1 # +1 accounts for the 1-indexing.
        return idx
    
    def _dump_preprocessor_info(self, max_str_len=3):
        """
        Prints a (roughly) human-readable dump of the info generated during the pre-processing.
        
        This is interesting for information and analysis, it is not necessary for anyone except this class to know this
        data in order to generate strings from the grammar.
        """
        # These tables are probably a bit weirdly transposed, but I'm trying to get it to match my notes as
        # closely as possible so I can double-check if something is going wrong.
        
        # How to display the results
        table_format = "grid"
        
        # Some aggregate info
        print "N = {}".format(self.ordered_nonterminals)
        r = len(self.ordered_nonterminals)
        print "|P| = {}".format(sum([self.s(i) for i in _inclusive_range(1, r)]))
        print "|R| = {}".format(sum([sum([self.t(i, j) for j in _inclusive_range(1, self.s(i))]) for i in _inclusive_range(1, r)]))
        
        # Print the a_ij
        a_table = [["i={} [N_i={}]".format(i, self.N(i))] + [self.a(i,j) for j in _inclusive_range(1, self.s(i))] for i in _inclusive_range(1, r)]
        # This table can be "ragged" - fill in the blanks.
        longest_row_length = max([len(row) for row in a_table])
        header = ["a_ij"] + ["j={}".format(j) for j in range(1, longest_row_length)]
        a_table_full = []
        for row in a_table:
            a_table_full.append(row + [""]*(longest_row_length - len(row)))
        
        print "\n" + tabulate.tabulate(a_table_full, header, tablefmt=table_format)
        
        # Print the t_ij
        t_table = [["i={}".format(i)] + [self.t(i,j) for j in _inclusive_range(1, self.s(i))] for i in _inclusive_range(1, r)]
        # This table can be "ragged" - fill in the blanks.
        longest_row_length = max([len(row) for row in t_table])
        header = ["t_ij"] + ["j={}".format(j) for j in range(1, longest_row_length)]
        t_table_full = []
        for row in t_table:
            t_table_full.append(row + [""]*(longest_row_length - len(row)))
        
        print "\n" + tabulate.tabulate(t_table_full, header, tablefmt=table_format)
        
        # Print the x_ijk
        for i in _inclusive_range(1, r):
            xi_table = []
            for j in _inclusive_range(1, self.s(i)):
                xij_column = [self.x(i,j,k) for k in _inclusive_range(1, self.t(i,j))]
                xi_table.append(xij_column)
            longest_column_length = max(len(col) for col in xi_table)
            xi_table.insert(0, ["k={}".format(k) for k in range(1, longest_column_length+1)])
            xi_table_full = list(itertools.izip_longest(*xi_table, fillvalue="")) # Transpose and fill
            header = ["x_{}jk".format(i)] + ["j={}".format(j) for j in range(1, len(xi_table_full[0]))]
            
            print "\n" + tabulate.tabulate(xi_table_full, header, tablefmt=table_format)
        
        # Print a few rows of f(i,n)
        for n in range(1, max_str_len+1):
            print
            for i in _inclusive_range(1, r):
                print "f({}, {}) = {}".format(i, n, self.f(i, n))
        
        # Print a few rows of f_prime(i,j,k,n)
        for n in range(1, max_str_len+1):
            print
            for i in _inclusive_range(1, r):
                fpni_table = []
                for j in _inclusive_range(1, self.s(i)):
                    fpnij_column = [self.f_prime(i,j,k,n) for k in _inclusive_range(1, self.t(i,j))] # N.B. Each element of this table is a list itself.
                    fpni_table.append(map(str, fpnij_column)) # Convert the inner lists to strings for display.
                longest_column_length = max(len(col) for col in fpni_table)
                fpni_table.insert(0, ["k={}".format(k) for k in range(1, longest_column_length+1)])
                fpni_table_full = list(itertools.izip_longest(*fpni_table, fillvalue="")) # Transpose and fill
                header = ["f_prime({}, j, k, {})".format(i, n)] + ["j={}".format(j) for j in range(1, len(fpni_table_full[0]))]
                
                print tabulate.tabulate(fpni_table_full, header, tablefmt=table_format)
        
        print
    
    def sample(self, length_mean=30, length_std_dev=None, expression_builder=TerminalString):
        """
        Sample a random string from the CFG.
        
        approx_length gives the mean length (number of terminal symbols) of the returned string.
        expression_builder must be a class (TerminalString or TerminalParseTree) which is used to concatenate the
        terminal symbols as they are chosen.
        """
        
        # Find index of start symbol
        start_symb = self.cfg.start()
        start_idx = self._nonterminal_index(start_symb)
        
        # We do not want a specific length, but a choice of strings over a range of lengths.
        # But we cannot weight this by the number of strings at each length: many grammars have vastly more possible
        # words as the string length increases.
        # For now, I will just filter out the lengths which have no strings, choose the length form a normal
        # distribution, and generate a string of that length uniformly at random using g().
        if length_std_dev is None:
            length_std_dev = max(length_mean * 0.2, 1.0) # Default value.
        elif length_std_dev < 0:
            raise self.GenerationError("CFGSampler.sample: length_std_dev must be greater than 0.")
        
        if length_std_dev == 0:
            target_length = length_mean
        else:
            target_length = self._choose_random_valid_length(start_idx, length_mean, length_std_dev)
        
        # Generate a string uniformly at random with that length.
        # N.B. This returns an object of type expression_builder.
        self._expression_builder = expression_builder
        return self.g(start_idx, target_length)
        
    
    def _choose_random_valid_length(self, start_idx, mean, std_dev):
        """
        Returns a random length for which if is possible to generate a string from this CFG.
        That is, there is some non-zero value in f(start_idx, length).
        The string lengths are approximately normally distributed, centered around the mean length provided, with the
        given standard deviation.
        The possible string lengths are two standard deviations on either side of the mean (or +/-1 if that is more).
        If there is no valid string length in this range, GenerationError is raised.
        """
        allowed_lengths, probabilities = self._build_random_valid_distribution(start_idx, mean, std_dev)
        return self._random.choice(allowed_lengths, p=probabilities)
    
    def _build_random_valid_distribution(self, start_idx, mean, std_dev):
        """
        A helper method for _choose_random_valid_length which builds the distribution opn lengths to sample from.
        Returns a pair of lists (ls, ps) of the lengths [just _inclusive_range(min_length, max_length)] and their
        probabilities.
        """
        assert mean > 0
        assert std_dev >= 0
        
        # Build a discrete distribution which approximates a normal distribution with the given mean and std_dev, but
        # which also has a limited range and removes those values where we cannot generate a string of that length.
        # This can be done by using the normal distribution to find the probability that the random length would fall
        # into each discrete bucket (ignoring values which are outside the allowed range) and removing the values at
        # invalid lengths. The remaining weights can be re-scaled to give a finite, discrete probability distribution
        # which we can sample with numpy.random.choice (strictly self._random.choice).
        
        # Work out the allowed length range to consider.
        min_length = max(min(int(round(mean - 2*std_dev)), mean - 1), 0)
        max_length = max(int(round(mean + 2*std_dev)), mean + 1)
        allowed_lengths = _inclusive_range(min_length, max_length)
        
        # Check which lengths in this range have some possible productions.
        has_productions = [l for l in allowed_lengths if sum(self.f(start_idx, l)) > 0]
        if len(has_productions) == 0:
            raise CFGSampler.GenerationError("This CFG cannot generate any strings of lengths {}..{}.".format(min_length, max_length))
        
        # Get the probabilities for each bucket from a normal distribution CDF.
        normal_probabilities = [scipy.stats.norm.cdf(x+0.5, loc=mean, scale=std_dev) - scipy.stats.norm.cdf(x-0.5, loc=mean, scale=std_dev) for x in allowed_lengths]
        
        # Remove those which we cannot generate a valid string for
        filtered_weights = [p if x in has_productions else 0 for x, p in zip(allowed_lengths, normal_probabilities)]
        
        # Re-scale to a probability distribution.
        result_dist = cfghelpers.to_prob_dist(filtered_weights)
        
        return allowed_lengths, result_dist
        
    
    class CFGError(Exception):
        """Format and content errors for the base CFG."""
        pass
    
    class GenerationError(Exception):
        """Errors during th string generation process."""
        pass
    

def _inclusive_range(i, j):
    return range(i, j+1)

def _nearest_in_list(x, ys):
    """
    Returns the y from ys which is the closest to x.
    """
    assert len(ys) > 0
    return min(ys, key=lambda y: abs(x-y))


def _demo():
    """
    Build an example CFG to demonstrate the random generation.
    
    The example CFG is from:
    https://en.wikipedia.org/wiki/Context-free_grammar#Algebraic_expressions
    """
    nt = nltk.grammar.Nonterminal
    Prod = nltk.grammar.Production
    prods = [
            Prod(nt("S"), ["x"]),
            Prod(nt("S"), ["y"]),
            Prod(nt("S"), ["z"]),
            Prod(nt("S"), [nt("S"), " + ", nt("S")]),
            Prod(nt("S"), [nt("S"), " - ", nt("S")]),
            Prod(nt("S"), [nt("S"), " * ", nt("S")]),
            Prod(nt("S"), [nt("S"), " / ", nt("S")]),
            Prod(nt("S"), ["(", nt("S"), ")"])
        ]
    start = nt("S")
    cfg = nltk.grammar.CFG(start, prods)
    
    generator = CFGSampler(cfg)
    
    print cfg
    print
    
    # Only for testing/debugging:
    #generator._dump_preprocessor_info(max_str_len=5)
    
    # N.B. What we call std. dev. here is the deviation of the normal distribution our final distribution is based on.
    approx_length = 10
    length_dev = 3
    print "Length to generate: ~{} (dev. {})".format(approx_length, length_dev)
    print
    
    # Demo of the length distribution.
    _demo_print_string_length_distribution(generator, start, approx_length, length_dev)
    
    print "String generation:"
    for _ in range(3):
        string = generator.sample(length_mean=approx_length, length_std_dev=length_dev)
        print string
    print
    
    parse_tree = generator.sample(length_mean=approx_length, length_std_dev=length_dev, expression_builder=TerminalParseTree)
    print "Parse tree generation:"
    print parse_tree
    print
    
    print "Different methods of flattening the same parse tree to a string:"
    print parse_tree.flatten(to_str=True)
    print parse_tree.flatten(to_str=True, markers=("[", "]"), markers_on_singletons=False)
    print
    

def _demo_print_string_length_distribution(generator, start, approx_length, length_dev):
    ls, ps = generator._build_random_valid_distribution(generator._nonterminal_index(start), approx_length, length_dev)
    print "Length distribution, accounting for possible strings:"
    prob_strs = [str(round(p, 4)) for p in ps]
    number_len = len(str(max(ls)))
    prob_len = max(map(len, prob_strs))
    prob_pct_limit = math.ceil(max(ps) * 10.0) * 10
    graph_width = 50
    scale_factor = graph_width/prob_pct_limit
    for x, p, p_str in zip(ls, ps, prob_strs):
        bar_size = int(round(100 * scale_factor * p))
        print "    {} -> {} |{}".format(str(x).rjust(number_len), p_str.ljust(prob_len), "#"*bar_size)
    pct_labels = range(0, int(prob_pct_limit+1), 10)
    ten_pct_mark_positions = [int(round(scale_factor * x)) for x in pct_labels]
    axis_bar = ""
    prev_mark = 0
    for i in ten_pct_mark_positions:
        axis_bar += "+".rjust(i-prev_mark, "-")
        prev_mark = i
    assert(len(axis_bar) == graph_width + 1)
    print "    {}    {} {}".format(" "*number_len, " "*prob_len, axis_bar)
    label_bar = ""
    prev_mark = 0
    prev_len = 0
    for idx, pct in zip(ten_pct_mark_positions, pct_labels):
        label = "{}%".format(int(pct))
        label_bar += label.rjust(idx - prev_mark + len(label) - prev_len, " ")
        prev_mark = idx
        prev_len = len(label)
    print "    {}    {} {}".format(" "*number_len, " "*prob_len, label_bar)
    dist_mu = sum([p*x for x,p in zip(ls,ps)])
    dist_std_dev = math.sqrt(sum([p*(float(x)-dist_mu)**2 for x,p in zip(ls,ps)]))
    print "Std dev:", round(dist_std_dev, 2)
    print
    

if __name__ == "__main__":
    _demo()
