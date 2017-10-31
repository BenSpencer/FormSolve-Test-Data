#!/usr/bin/env python
"""
Tests for cfgsampler.py
"""

import unittest

import random
import numpy.random

try:
    import nltk.grammar
except ImportError:
    print "Module 'nltk' is required."
    print "Try 'sudo pip install nltk' or see http://www.nltk.org/install.html"
    sys.exit()

import cfgsampler
import cfghelpers # Only for to_prob_dist


class TestCFGSampler(unittest.TestCase):
    
    # Some sample CFGs which are used in different tests.
    def _simple_cfg(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = [
                Prod(nt("S"), ["x", nt("T")]),
                Prod(nt("T"), ["y", nt("S")]),
                Prod(nt("T"), ["z", nt("S")]),
                Prod(nt("T"), ["w"])
            ]
        start = nt("S")
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    def _arithmetic_cfg(self):
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
        return cfg
    
    def _empty_cfg(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = []
        start = nt("S")
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    def _unproductive_cfg(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = [
                Prod(nt("S"), ["x"]),
                Prod(nt("S"), [nt("T")]),
                Prod(nt("S"), [nt("S"), "y"])
            ]
        start = nt("S")
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    def _empty_productions_cfg(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = [
                Prod(nt("S"), [nt("S"), "x"]),
                Prod(nt("S"), [])
            ]
        start = nt("S")
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    def _ambiguous_cfg(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = [
                Prod(nt("S"), [nt("T"), "x"]),
                Prod(nt("S"), ["x", nt("T")]),
                Prod(nt("T"), ["x"])
            ]
        start = nt("S")
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    def _non_string_cfg_mixed_types(self):
        nt = nltk.grammar.Nonterminal
        Prod = nltk.grammar.Production
        prods = [
                Prod(nt(1), [1234, nt(2)]),
                Prod(nt(2), [(5,6,7), nt(1)]),
                Prod(nt(2), [frozenset([8,9]), nt(1)]),
                Prod(nt(2), [True])
            ]
        start = nt(1)
        cfg = nltk.grammar.CFG(start, prods)
        return cfg
    
    # The actual tests
    
    def test_cfgsampler_simple_cfg(self):
        # A simple "overall" check that we can generate strings in the expected pattern.
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        result = sampler.sample()
        self.assertIsInstance(result, cfgsampler.TerminalString)
        self.assertRegexpMatches(str(result), '(x[yz])*xw')
    
    def test_cfgsampler_simple_cfg_multiple_generation(self):
        num_samples = 10
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        strings = set()
        for _ in range(num_samples):
            new_str = str(sampler.sample())
            strings.add(new_str)
            self.assertRegexpMatches(new_str, '(x[yz])*xw')
        # Check we actually generated some different strings
        self.assertGreater(len(strings), 1)
    
    def test_cfgsampler_empty_cfg(self):
        with self.assertRaises(cfgsampler.CFGSampler.CFGError):
            cfg = self._empty_productions_cfg()
            sampler = cfgsampler.CFGSampler(cfg)
    
    def test_cfgsampler_unproductive_nonterminals(self):
        # There should be no problem with unproductive nonterminals.
        # The "real" test here is that no exception is raised.
        cfg = self._unproductive_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        self.assertRegexpMatches(str(sampler.sample()), 'xy*')
    
    def test_cfgsampler_empty_productions(self):
        with self.assertRaises(cfgsampler.CFGSampler.CFGError):
            cfg = self._empty_productions_cfg()
            sampler = cfgsampler.CFGSampler(cfg)
    
    def test_cfgsampler_generated_length(self):
        num_samples = 10
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        lens = set()
        for _ in range(num_samples):
            new_str_len = len(str(sampler.sample(length_mean=20)))
            lens.add(new_str_len)
            self.assertIn(new_str_len, range(12,29)) # By default the string length is within 40% each way.
        # Check we actually generated some different string lengths
        self.assertGreater(len(lens), 1)
    
    def test_cfgsampler_generated_length_deviation(self):
        # The same as the above, but we set the deviation and check the generated strings are within the new range.
        num_samples = 10
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        lens = set()
        for _ in range(num_samples):
            new_str_len = len(str(sampler.sample(length_mean=20, length_std_dev=2)))
            lens.add(new_str_len)
            self.assertIn(new_str_len, range(16,25)) # Lengths can be +/-2 SD.
        # Check we actually generated some different string lengths
        self.assertGreater(len(lens), 1)
    
    def test_cfgsampler_generated_length_minimum_deviation(self):
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        with self.assertRaises(cfgsampler.CFGSampler.GenerationError):
            sampler.sample(length_mean=20, length_std_dev=0.1) # Minimum deviation is 1
    
    def test_grammar_counts(self):
        # Check the counts of strings whihc can be generated by each nonterminal at each length.
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        s_idx = sampler._nonterminal_index(nltk.grammar.Nonterminal("S"))
        t_idx = sampler._nonterminal_index(nltk.grammar.Nonterminal("T"))
        
        self.assertEqual(sampler.f(s_idx, 0), [0])
        self.assertEqual(sampler.f(s_idx, 1), [0])
        self.assertEqual(sampler.f(s_idx, 2), [1])
        self.assertEqual(sampler.f(s_idx, 3), [0])
        self.assertEqual(sampler.f(s_idx, 4), [2])
        self.assertEqual(sampler.f(s_idx, 5), [0])
        self.assertEqual(sampler.f(s_idx, 6), [4])
        self.assertEqual(sampler.f(s_idx, 10), [16])
        
        self.assertEqual(sampler.f(t_idx, 0), [0, 0, 0])
        self.assertEqual(sampler.f(t_idx, 1), [0, 0, 1])
        self.assertEqual(sampler.f(t_idx, 2), [0, 0, 0])
        self.assertEqual(sampler.f(t_idx, 3), [1, 1, 0])
        self.assertEqual(sampler.f(t_idx, 4), [0, 0, 0])
        self.assertEqual(sampler.f(t_idx, 5), [2, 2, 0])
        self.assertEqual(sampler.f(t_idx, 11), [16, 16, 0])
    
    def test_grammar_counts_ambiguous(self):
        # This is documentation more than desired - strings which can be generated multiple ways in an ambiguous
        # grammar are counted twice.
        cfg = self._ambiguous_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        s_idx = sampler._nonterminal_index(nltk.grammar.Nonterminal("S"))
        
        # N.B. This grammar can only produce a single string "xx", but there are two S-productions which produce it.
        self.assertEqual(sampler.f(s_idx, 2), [1, 1])
    
    def test_internal_state(self):
        # This is a general test, to check the implementation matches my notes on the arithmetic CFG.
        # See also CFGSampler._dump_preprocessor_info()
        
        cfg = self._arithmetic_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        s_idx = sampler._nonterminal_index(nltk.grammar.Nonterminal("S"))
        
        # Number of nonterminals, mostly for use later.
        r = len(sampler.ordered_nonterminals)
        self.assertEqual(r, 1)
        
        # Check the s_i values
        si_list = [sampler.s(i) for i in cfgsampler._inclusive_range(1, r)]
        self.assertEqual(si_list, [8])
        
        # Check the t_ij values.
        tij_table = [[sampler.t(i,j) for j in cfgsampler._inclusive_range(1, sampler.s(i))] for i in cfgsampler._inclusive_range(1, r)]
        expected_tij = [[1, 1, 1, 3, 3, 3, 3, 3]]
        self.assertEqual(tij_table, expected_tij)
        
        # Check some values of f(i, j)
        self.assertEqual(sampler.f(s_idx, 1), [1, 1, 1, 0, 0, 0, 0, 0])
        self.assertEqual(sampler.f(s_idx, 2), [0, 0, 0, 0, 0, 0, 0, 0])
        self.assertEqual(sampler.f(s_idx, 3), [0, 0, 0, 9, 9, 9, 9, 3])
        
        # Check some values of f_prime(i, j, k, n)
        self.assertEqual(sampler.f_prime(s_idx, 1, 1, 1), [1])
        self.assertEqual(sampler.f_prime(s_idx, 4, 1, 1), [])
        self.assertEqual(sampler.f_prime(s_idx, 4, 3, 1), [3])
        self.assertEqual(sampler.f_prime(s_idx, 8, 3, 1), [1])
        
        self.assertEqual(sampler.f_prime(s_idx, 1, 1, 3), [0])
        self.assertEqual(sampler.f_prime(s_idx, 4, 1, 3), [9])
        self.assertEqual(sampler.f_prime(s_idx, 4, 3, 3), [39])
        self.assertEqual(sampler.f_prime(s_idx, 8, 1, 3), [3])
        self.assertEqual(sampler.f_prime(s_idx, 8, 3, 3), [0])
        
        self.assertEqual(sampler.f_prime(s_idx, 1, 1, 5), [0])
        self.assertEqual(sampler.f_prime(s_idx, 4, 1, 5), [117, 0, 117])
        self.assertEqual(sampler.f_prime(s_idx, 4, 3, 5), [975])
        self.assertEqual(sampler.f_prime(s_idx, 8, 1, 5), [39])
        self.assertEqual(sampler.f_prime(s_idx, 8, 3, 5), [0])
        
    
    def test_length_is_random_and_in_expected_range(self):
        # N.B. This is essentially a dupe of test_cfgsampler_generated_length
        # Check that over a few tries, we get different lengths
        num_samples = 10
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        start_idx = sampler._nonterminal_index(cfg.start())
        lens = set()
        for _ in range(num_samples):
            new_str_len = sampler._choose_random_valid_length(start_idx, 20, 5)
            lens.add(new_str_len)
            self.assertIn(new_str_len, range(10,31)) # Lengths can be +/-2 SD.
        # Check we actually generated some different string lengths
        self.assertGreater(len(lens), 1)
    
    def test_length_is_valid(self):
        # Check we do not generate any lengths which the CFG cannot generate.
        num_samples = 10
        cfg = self._simple_cfg()
        sampler = cfgsampler.CFGSampler(cfg)
        start_idx = sampler._nonterminal_index(cfg.start())
        lens = set()
        for _ in range(num_samples):
            new_str_len = sampler._choose_random_valid_length(start_idx, 20, 5)
            lens.add(new_str_len)
        # Check we didn't generate any "bad" lengths
        # N.B. _simple_cfg can only generate even length strings.
        for l in lens:
            self.assertEqual(l % 2, 0)
    
    def test_length_distribution_1(self):
        cfg = self._arithmetic_cfg()
        length_mean = 10
        length_dev = 3
        expected_ps = [0.0, 0.06983198447501662, 0.0, 0.16847870286707742, 0.0, 0.2616893126579058, 0.0, 0.2616893126579058, 0.0, 0.16847870286707767, 0.0, 0.06983198447501666, 0.0]
        self._check_length_distribution(cfg, length_mean, length_dev, expected_ps)
    
    def test_length_distribution_2(self):
        cfg = self._arithmetic_cfg()
        length_mean = 20
        length_dev = 5
        expected_ps = [0.0, 0.03317145131507093, 0.0, 0.06277536943268393, 0.0, 0.10128785298360278, 0.0, 0.13933787360504674, 0.0, 0.16342745266359576, 0.0, 0.16342745266359565, 0.0, 0.13933787360504674, 0.0, 0.10128785298360289, 0.0, 0.06277536943268379, 0.0, 0.03317145131507075, 0.0]
        self._check_length_distribution(cfg, length_mean, length_dev, expected_ps)
    
    def _check_length_distribution(self, cfg, length_mean, length_dev, expected_ps):
        sampler = cfgsampler.CFGSampler(cfg)
        start_idx = sampler._nonterminal_index(cfg.start())
        ls, ps = sampler._build_random_valid_distribution(start_idx, length_mean, length_dev)
        
        # Check the sizes are appropriate
        self.assertEqual(len(ls), len(ps))
        
        # Check the valid lengths are as expected
        self.assertEqual(ls, range(length_mean - 2*length_dev, length_mean + 2*length_dev + 1)) # Lengths can be +/-2 SD.
        
        # Check the probabilities sum to 1.
        # N.B. This is how it is checked in numpy.random.choice(), which is what we must satisfy:
        # https://github.com/numpy/numpy/blob/a4dca241647a31a4313238fa183b67e453c1de0f/numpy/random/mtrand/mtrand.pyx#L1129
        self.assertAlmostEqual(sum(ps), 1)
        
        # Check the probabilities are the exact distribution we expect.
        self.assertEqual(len(ps), len(expected_ps))
        for actual, exp in zip(ps, expected_ps):
            if exp == 0:
                # Special handling for the 0 cases, which must really be 0, not just "close enough"
                self.assertEqual(actual, 0)
            else:
                self.assertAlmostEqual(actual, exp)
    
    def test_non_string_terminals(self):
        cfg = self._non_string_cfg_mixed_types()
        sampler = cfgsampler.CFGSampler(cfg)
        # The main test is that there's no crash.
        # But we will also check that all the values appear in a medium-size string.
        result = sampler.sample(length_mean=30, length_std_dev=2)
        self.assertIsInstance(result, cfgsampler.TerminalString)
        result_list = result.as_list()
        self.assertIn(len(result), range(26, 35))
        for itm in [1234, (5,6,7), frozenset([8,9]), True]:
            self.assertIn(itm, result_list)
    
    def test_random_seed(self):
        # We can set a seed to use for the random generation.
        # This allows the same samples to be re-generated in future in case that is necessary.
        seed_1 = 1234
        seed_2 = 5678
        
        cfg = self._simple_cfg()
        
        sampler_a = cfgsampler.CFGSampler(cfg)
        result_a = str(sampler_a.sample())
        
        sampler_b = cfgsampler.CFGSampler(cfg, random_seed=seed_1)
        result_b = str(sampler_b.sample())
        
        sampler_c = cfgsampler.CFGSampler(cfg, random_seed=seed_2)
        result_c = str(sampler_c.sample())
        
        sampler_d = cfgsampler.CFGSampler(cfg, random_seed=seed_1)
        result_d = str(sampler_d.sample())
        
        # We expect to have B==D, but all others unequal.
        self.assertNotEqual(result_a, result_b)
        self.assertNotEqual(result_a, result_c)
        self.assertNotEqual(result_a, result_d)
        self.assertNotEqual(result_b, result_c)
        self.assertEqual(result_b, result_d)
        self.assertNotEqual(result_c, result_d)
        
        # In particular, we know the values for B, C and D
        self.assertEqual(result_b, "xyxzxyxzxyxzxyxzxzxyxyxw")
        self.assertEqual(result_c, "xyxzxyxyxyxyxzxzxzxzxyxzxyxzxw")
        self.assertEqual(result_d, "xyxzxyxzxyxzxyxzxzxyxyxw")
    
    def test_random_choices_are_internal(self):
        # Check that external calls to random.random and numpy.random... do not affect the internal state of the generator.
        
        cfg = self._simple_cfg()
        seed = 1234
        
        expected_1 = "xyxzxyxzxyxzxyxzxzxyxyxw"
        expected_2 = "xzxzxyxyxzxzxzxyxzxzxzxzxzxyxzxw"
        expected_3 = "xyxyxyxyxyxzxyxyxyxyxyxzxzxzxzxyxzxyxzxw"
        
        sampler_a = cfgsampler.CFGSampler(cfg, random_seed=seed)
        result_a1 = str(sampler_a.sample())
        result_a2 = str(sampler_a.sample())
        result_a3 = str(sampler_a.sample())
        
        # Then "normal" case
        self.assertEqual(result_a1, expected_1)
        self.assertEqual(result_a2, expected_2)
        self.assertEqual(result_a3, expected_3)
        
        # Now try sampling while other random functions are being called, which change the global state.
        sampler_b = cfgsampler.CFGSampler(cfg, random_seed=seed)
        random.random()
        result_b1 = str(sampler_b.sample())
        random.random()
        random.random()
        result_b2 = str(sampler_b.sample())
        numpy.random.sample([1,2,3])
        numpy.random.random()
        result_b3 = str(sampler_b.sample())

        # If the random state is internal to CFGSampler, we expect the results to be the same,
        self.assertEqual(result_b1, expected_1)
        self.assertEqual(result_b2, expected_2)
        self.assertEqual(result_b3, expected_3)


class TestTerminalString(unittest.TestCase):
    
    def test_terminal(self):
        t = cfgsampler.TerminalString.terminal("Hello")
        self.assertEqual(str(t), "Hello")
    
    def test_concat(self):
        t1 = cfgsampler.TerminalString.terminal("Hello")
        t2 = cfgsampler.TerminalString.terminal("World")
        result = cfgsampler.TerminalString.concat(t1, t2)
        self.assertEqual(str(result), "HelloWorld")
    
    def test_nonterminal_marker(self):
        t = cfgsampler.TerminalString.terminal("Hello")
        result = cfgsampler.TerminalString.nonterminal_expansion(t)
        self.assertEqual(str(result), "Hello")
    
    def test_as_list(self):
        t1 = cfgsampler.TerminalString.terminal("Hello")
        t2 = cfgsampler.TerminalString.terminal("World")
        result = cfgsampler.TerminalString.concat(t1, t2)
        self.assertEqual(result.as_list(), ["Hello", "World"])
    
    def test_len(self):
        t1 = cfgsampler.TerminalString.terminal("Hello")
        t2 = cfgsampler.TerminalString.terminal("World")
        result = cfgsampler.TerminalString.concat(t1, t2)
        self.assertEqual(len(result), 2)
    

class TestTerminalParseTree(unittest.TestCase):
    
    def test_terminal(self):
        t = cfgsampler.TerminalParseTree.terminal("Hello")
        self.assertEqual(t.parse_tree(), ["Hello"])
    
    def test_concat(self):
        t1 = cfgsampler.TerminalParseTree.terminal("Hello")
        t2 = cfgsampler.TerminalParseTree.terminal("World")
        result = cfgsampler.TerminalParseTree.concat(t1, t2)
        self.assertEqual(result.parse_tree(), ["Hello", "World"])
    
    def test_nonterminal_marker(self):
        t = cfgsampler.TerminalParseTree.terminal("Hello")
        result = cfgsampler.TerminalParseTree.nonterminal_expansion(t)
        self.assertEqual(result.parse_tree(), [["Hello"]])
    
    def _example_expression(self):
        t1 = cfgsampler.TerminalParseTree.nonterminal_expansion(cfgsampler.TerminalParseTree.terminal("A"))
        t2 = cfgsampler.TerminalParseTree.terminal("+")
        t3 = cfgsampler.TerminalParseTree.nonterminal_expansion(cfgsampler.TerminalParseTree.terminal("B"))
        t4 = cfgsampler.TerminalParseTree.terminal("*")
        t5 = cfgsampler.TerminalParseTree.nonterminal_expansion(cfgsampler.TerminalParseTree.terminal("C"))
        
        t23 = cfgsampler.TerminalParseTree.concat(t2, t3)
        t123 = cfgsampler.TerminalParseTree.concat(t1, t23)
        e123 = cfgsampler.TerminalParseTree.nonterminal_expansion(t123)
        
        t45 = cfgsampler.TerminalParseTree.concat(t4, t5)
        t12345 = cfgsampler.TerminalParseTree.concat(e123, t45)
        e12345 = cfgsampler.TerminalParseTree.nonterminal_expansion(t12345)
        
        return e12345
    
    def test_nested_expression(self):
        x = self._example_expression()
        expected = [[[["A"], "+", ["B"]], "*", ["C"]]]
        self.assertEqual(x.parse_tree(), expected)
    
    def test_flatten(self):
        x = self._example_expression()
        expected = ["A", "+", "B", "*", "C"]
        self.assertEqual(x.flatten(), expected)
    
    def test_flatten_to_string(self):
        x = self._example_expression()
        expected = "A+B*C"
        self.assertEqual(x.flatten(to_str=True), expected)
    
    def test_flatten_with_markers(self):
        x = self._example_expression()
        expected = ["(", "(", "(", "A", ")", "+", "(", "B", ")", ")", "*", "(", "C", ")", ")"]
        expected_str = "(((A)+(B))*(C))"
        self.assertEqual(x.flatten(markers=("(",")")), expected)
        self.assertEqual(x.flatten(to_str=True, markers=("(",")")), expected_str)
    
    def test_flatten_with_markers_without_singletons(self):
        x = self._example_expression()
        expected = ["(", "(", "A", "+", "B", ")", "*", "C", ")"]
        expected_str = "((A+B)*C)"
        self.assertEqual(x.flatten(markers=("(",")"), markers_on_singletons=False), expected)
        self.assertEqual(x.flatten(to_str=True, markers=("(",")"), markers_on_singletons=False), expected_str)
    
    def test_str(self):
        x = self._example_expression()
        expected = "[[[['A'], '+', ['B']], '*', ['C']]]"
        self.assertEqual(str(x), expected)
    
    def test_len(self):
        x = self._example_expression()
        self.assertEqual(len(x), 5)
    

class TestHelperMethods(unittest.TestCase):
    
    def test_inclusive_range_typical(self):
        self.assertEqual(cfgsampler._inclusive_range(1,5), [1,2,3,4,5])
    
    def test_inclusive_range_single(self):
        self.assertEqual(cfgsampler._inclusive_range(3,3), [3])
    
    def test_inclusive_range_invalid(self):
        # This matches the behaviour of range()
        self.assertEqual(cfgsampler._inclusive_range(4,2), [])
    
    def test_nearest_in_list_typical(self):
        self.assertEqual(cfgsampler._nearest_in_list(6.3, [4, 5, 7, 8, 9]), 7)
    
    def test_nearest_in_list_match(self):
        self.assertEqual(cfgsampler._nearest_in_list(8, [4, 5, 7, 8, 9]), 8)
    
    def test_nearest_in_list_empty_list(self):
        with self.assertRaises(AssertionError):
            cfgsampler._nearest_in_list(6.3, [])
    
    def test_nearest_in_list_outside_range(self):
        self.assertEqual(cfgsampler._nearest_in_list(18.2, [4, 5, 7, 8, 9]), 9)
    
    def test_to_prob_dist_typical(self):
        self.assertEqual(cfghelpers.to_prob_dist([1, 3, 5, 3, 1]), [1.0/13, 3.0/13, 5.0/13, 3.0/13, 1.0/13])
    
    def test_to_prob_dist_single(self):
        self.assertEqual(cfghelpers.to_prob_dist([5]), [1.0])
    
    def test_to_prob_dist_empty(self):
        with self.assertRaises(AssertionError):
            cfghelpers.to_prob_dist([])
    
    def test_to_prob_dist_some_zero(self):
        self.assertEqual(cfghelpers.to_prob_dist([1, 0, 5, 3, 0]), [1.0/9, 0.0/9, 5.0/9, 3.0/9, 0.0/9])
    
    def test_to_prob_dist_all_zero(self):
        with self.assertRaises(AssertionError):
            cfghelpers.to_prob_dist([0, 0, 0])
    

if __name__ == "__main__":
    unittest.main()
