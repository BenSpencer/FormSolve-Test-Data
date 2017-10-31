"""
Some helper methods for dealing with the CFGs.
"""

import sys
import random
import numpy.random
import collections
try:
    import nltk.grammar
    #import nltk.parse.generate
except ImportError:
    print "Module 'nltk' is required."
    print "Try 'sudo pip install nltk' or see http://www.nltk.org/install.html"
    sys.exit()


def sample_from_generator(gen, k):
    """
    Sample 'k' items from the (finite!) generator 'gen'.
    
    This is intended to be equivalent to random.sample(list(gen), k).
    """
    # https://en.wikipedia.org/wiki/Reservoir_sampling
    # http://stackoverflow.com/a/12581484
    results = []
    
    for i, v in enumerate(gen):
        r = random.randint(0, i)
        if r < k:
            if i < k:
                results.insert(r, v) # Add first samplesize items in random order
            else:
                results[r] = v # At a decreasing rate, replace random items
    
    #if len(results) < samplesize:
    #    raise ValueError("Sample larger than population.")

    return results


def ensure_certain_nonterminals_used(initial_prods, desired_nonterminals):
    """
    A transformation of a set of production rules to another, where the second set is equivalent except that at least
    one of the nonterminals listed in 'desired_nonterminals' MUST be used in in every sentence generated.
    
    The transformation is done by duplicating the productions into "satisfied" and "unsatisfied" sets.
    The "satisfied" set is unconstrained - the requirement to include a desired nonterminal is already satisfied
    elsewhere. They behave exactly as the original productions do.
    The "unsatisfied" set are required to include a desired nonterminal, so they must either do this directly or
    generate another unsatisfied child which can do it.
    
    N.B. This will cause a blowup in the number of productions.
    """
    desired_nonterminals = set(desired_nonterminals)
    all_nonterminals = set((p.lhs() for p in initial_prods))
    assert desired_nonterminals.issubset(all_nonterminals) # Sanity check. Could in theory do without this, but it seems like it would be a bug in the calling code if this assertion fails.
    
    new_prods = []
    for p in initial_prods:
        old_weight = p.weight if hasattr(p, 'weight') else WeightedProduction.DEFAULT_WEIGHT
        
        # The pre-satisfied version of this production is just the same as before, but wth pre-satisfied children.
        pre_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), True)), [nltk.grammar.Nonterminal((x.symbol(), True)) if isinstance(x, nltk.grammar.Nonterminal) else x for x in p.rhs()], old_weight)
        new_prods.append(pre_sat)
        
        # If this production is a desired nonterminal, then the unsatisfied version also generates the same children as before (i.e. all satisfied).
        if p.lhs() in desired_nonterminals:
            target_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), pre_sat.rhs(), old_weight)
            new_prods.append(target_sat)
            
        else:
            # The unsatisfied versions must generate at least one unsatisfied child.
            # If there are no nonterminals on the RHS, then it is impossible to generate a desired nonterminal via this production, therefore we intentionally generate nothing.
            old_rhs = list(p.rhs())
            new_rhs_options = [_to_sat_nts(old_rhs[:idx]) + [nltk.grammar.Nonterminal((x.symbol(), False))] + _to_sat_nts(old_rhs[idx+1:]) for idx, x in enumerate(old_rhs) if isinstance(x, nltk.grammar.Nonterminal)]
            for rhs in new_rhs_options:
                unsat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), rhs, old_weight/len(new_rhs_options))
                new_prods.append(unsat)
    
    return new_prods

def _to_sat_nts(xs):
    return [nltk.grammar.Nonterminal((x.symbol(), True)) if isinstance(x, nltk.grammar.Nonterminal) else x for x in xs]


def ensure_certain_terminal_used(initial_prods, desired_terminals):
    """
    A transformation of a set of production rules to another, where the second set is equivalent except that at least
    one of the terminals listed in 'desired_terminals' MUST be used in in every sentence generated.

    The transformation is done by duplicating the productions into "satisfied" and "unsatisfied" sets.
    The "satisfied" set is unconstrained - the requirement to include a desired terminal symbol is already satisfied
    elsewhere. They behave exactly as the original productions do.
    The "unsatisfied" set are required to include a desired terminal, so they must either do this directly or
    generate another unsatisfied child which can do it.

    N.B. This will cause a blowup in the number of productions.
    """
    # TODO: This is almost exactly duplicated from above!
    desired_terminals = set(desired_terminals)
    all_terminals = set((x for p in initial_prods for x in p.rhs()))
    assert desired_terminals.issubset(all_terminals) # Sanity check. Could in theory do without this, but it seems like it would be a bug in the calling code if this assertion fails.
    
    new_prods = []
    for p in initial_prods:
        old_weight = p.weight if hasattr(p, 'weight') else WeightedProduction.DEFAULT_WEIGHT
        
        # The pre-satisfied version of this production is just the same as before, but wth pre-satisfied children.
        pre_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), True)), [
            nltk.grammar.Nonterminal((x.symbol(), True)) if isinstance(x, nltk.grammar.Nonterminal) else x for x in
            p.rhs()], old_weight)
        new_prods.append(pre_sat)
        
        # If this production generates the desired terminal, then we are satisfied (and all children can be satisfied as well).
        if not desired_terminals.isdisjoint(set(p.rhs())):
            target_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), pre_sat.rhs(),
                                            old_weight)
            new_prods.append(target_sat)
        
        else:
            # The unsatisfied versions must generate at least one unsatisfied child.
            # If there are no nonterminals on the RHS, then it is impossible to generate a desired nonterminal via this production, therefore we intentionally generate nothing.
            old_rhs = list(p.rhs())
            new_rhs_options = [
                _to_sat_nts(old_rhs[:idx]) + [nltk.grammar.Nonterminal((x.symbol(), False))] + _to_sat_nts(
                    old_rhs[idx + 1:]) for idx, x in enumerate(old_rhs) if isinstance(x, nltk.grammar.Nonterminal)]
            for rhs in new_rhs_options:
                unsat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), rhs, old_weight / len(new_rhs_options))
                new_prods.append(unsat)
    
    return new_prods



def ensure_certain_containment(initial_prods, target_nonterminals, must_generate, exempted_rhs):
    """
    Transforms a list of productions to a modified one, which is equivalent except that every production with LHS from
    the set 'target_nonterminals' must contain a production with LHS from the set 'must_generate' somewhere in the
    subtree it generates.
    If a production with LHS in 'target_nonterminals' has a RHS with only nonterminals from the 'exempted_rhs' set,
    then it will not create a new restriction (but it will propagate the restriction it already has; behaving like a
    normal nonterminals).
    
    This is used in our implementation to avoid constant computations.
    We say that each expression must contain at least one input in its subtree, which means we cannot generate
    expressions containing only constants.
    e.g. we will never generate "2+1" because the "+" expression has no input as a subtree.
    
    N.B. This is related to ensure_certain_nonterminals_used, but could not be used to implement it. In that case there
    is no requirement on any subtree except the root of the tree - there is no recursive application of the rule.
    """
    # The implementation is similar to ensure_certain_nonterminals_used in that we tag each nonterminal with a flag to
    # indicate whether the constraints are satisfied at that point in the generation and the productions are free to
    # behave as they do in the original CFG.
    
    target_nonterminals = set(target_nonterminals)
    must_generate = set(must_generate)
    exempted_rhs = set(exempted_rhs)
    all_nonterminals = set((p.lhs() for p in initial_prods))
    assert(target_nonterminals.issubset(all_nonterminals)) # Sanity check.
    assert(must_generate.issubset(all_nonterminals)) # Sanity check.
    assert(exempted_rhs.issubset(all_nonterminals)) # Sanity check.
    assert(target_nonterminals.isdisjoint(must_generate)) # Sanity check to avoid corner-cases.
    assert(target_nonterminals.isdisjoint(exempted_rhs)) # Sanity check to avoid corner-cases.
    assert(exempted_rhs.isdisjoint(must_generate)) # Sanity check to avoid corner-cases.
    
    def all_rhs_is_exempt(rhs):
        return all([x in exempted_rhs if isinstance(x, nltk.grammar.Nonterminal) else True for x in rhs])
    
    new_prods = []
    for p in initial_prods:
        old_weight = p.weight if hasattr(p, 'weight') else WeightedProduction.DEFAULT_WEIGHT
        old_rhs = list(p.rhs())
        unrestricted_rhs = [nltk.grammar.Nonterminal((x.symbol(), True)) if isinstance(x, nltk.grammar.Nonterminal) else x for x in old_rhs]
        new_rhs_options = [_to_sat_nts(old_rhs[:idx]) + [nltk.grammar.Nonterminal((x.symbol(), False))] + _to_sat_nts(old_rhs[idx+1:]) for idx, x in enumerate(old_rhs) if isinstance(x, nltk.grammar.Nonterminal)]
        
        # 1. Generate the satisfied version of the rules...
        
        # If the rule is a target, we CREATE a new restriction, subject to exempted_rhs
        if p.lhs() in target_nonterminals and not all_rhs_is_exempt(p.rhs()):
            # At least one nonterminal child must contain a goal.
            # If there are no nonterminals on the RHS, then it is impossible to generate a desired nonterminal via this
            # production, therefore we intentionally generate nothing.
            for rhs in new_rhs_options:
                unsat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), True)), rhs, old_weight/len(new_rhs_options))
                new_prods.append(unsat)
        else:
            # The pre-satisfied version of this production is just the same as before, but wth pre-satisfied children.
            pre_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), True)), unrestricted_rhs, old_weight)
            new_prods.append(pre_sat)
        
        # 2. Generate the unsatisfied versions of the rules...
        
        # If this rule is in must_generate, then we have satisfied the restriction. The remainder of the expansions are
        # unrestricted.
        if p.lhs() in must_generate:
            goal_sat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), unrestricted_rhs, old_weight)
            new_prods.append(goal_sat)
            
        else:
            # Whether this rule is a target or not, we want to propagate the restriction info.
            # At least one nonterminal child must contain a goal.
            # If there are no nonterminals on the RHS, then it is impossible to generate a desired nonterminal via this
            # production, therefore we intentionally generate nothing.
            for rhs in new_rhs_options:
                unsat = WeightedProduction(nltk.grammar.Nonterminal((p.lhs().symbol(), False)), rhs, old_weight/len(new_rhs_options))
                new_prods.append(unsat)
        
    
    return new_prods
    

def to_prob_dist(weights):
    """
    Converts a list of weights into a probability distribution.
    """
    assert(weights is not [])
    assert(all([w >= 0 for w in weights])) # Do not allow negative weights.
    assert(not all([w == 0 for w in weights])) # This is not really a probability distribution, as they don't sum to 1.
    
    total = sum(map(float, weights))
    return [float(x)/total for x in weights]


# NB: WeightedProduction is not supported by cfgsampler.CFGSampler, so the weights are not used in the current version.
class WeightedProduction(nltk.grammar.Production):
    """
    Similar to nltk.grammar.ProbabilisticProduction except we do not require the weights to form a probability
    distribution.
    """
    DEFAULT_WEIGHT=1.0
    
    def __init__(self, lhs, rhs, weight=DEFAULT_WEIGHT):
        nltk.grammar.Production.__init__(self, lhs, rhs)
        assert(isinstance(weight, (float, int)))
        self.weight = float(weight)


