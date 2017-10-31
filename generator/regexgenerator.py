#!/usr/bin/env python
"""
Uses a simple CFG to generate simple regular expressions.
"""

# TODO: For now we only generate simple regular expressions. In principle we could/should generate complex expressions including some of the more difficult or non-regular features.

import sys

try:
    import nltk.grammar
except ImportError:
    print "Module 'nltk' is required."
    print "Try 'sudo pip install nltk' or see http://www.nltk.org/install.html"
    sys.exit()

import cfgsampler
import cfghelpers

REGEX_GENERATOR_LENGTH_MEAN = 10
REGEX_GENERATOR_LENGTH_DEV = 8

def regex_cfg():
    # This is not intended to capture all possible regular expressions, only a subset of typical or interesting looking ones.
    # e.g. I will try to avoid nonsensical ones like including ^ in the middle, etc.
    
    Prod = nltk.grammar.Production

    REGEX = nltk.grammar.Nonterminal("REGEX")
    REGEX_BODY = nltk.grammar.Nonterminal("REGEX_BODY")
    CHOICE = nltk.grammar.Nonterminal("CHOICE")
    MULTIPLIER = nltk.grammar.Nonterminal("MULTIPLIER")
    CHARS = nltk.grammar.Nonterminal("CHARS")
    LITERAL_CHARS = nltk.grammar.Nonterminal("LITERAL_CHARS")
    CHAR_CLASS = nltk.grammar.Nonterminal("CHAR_CLASS")
    CHAR_CLASS_CONTENTS_A = nltk.grammar.Nonterminal("CHAR_CLASS_CONTENTS_A")
    CHAR_CLASS_CONTENTS_B = nltk.grammar.Nonterminal("CHAR_CLASS_CONTENTS_B")
    CHAR_CLASS_CONTENTS_C = nltk.grammar.Nonterminal("CHAR_CLASS_CONTENTS_C")
    CHAR_CLASS_CONTENTS_D = nltk.grammar.Nonterminal("CHAR_CLASS_CONTENTS_D")
    SPECIAL_GROUP = nltk.grammar.Nonterminal("SPECIAL_GROUP")
    DOT = nltk.grammar.Nonterminal("DOT")
    
    prods = [
        # Depending on the application in JavaScript it is important to match the whole string (^...$) or not.
        # This is not a decision which should be made in this code, so we generate expressions without ^ or $.
        # e.g. in RegExp.test() we most likely want to match the whole string, whereas a find-and-replace wouldn't.
        #Prod(REGEX, ["^", REGEX_BODY, "$"]),
        Prod(REGEX, [REGEX_BODY]),
        #Prod(REGEX, ["(", REGEX_BODY, "|", REGEX_BODY, ")"]),
        
        Prod(MULTIPLIER, ["*"]),
        Prod(MULTIPLIER, ["+"]),
        Prod(MULTIPLIER, ["?"]),
        
        Prod(CHOICE, ["(", REGEX_BODY, "|", REGEX_BODY, ")"]),
    
        Prod(REGEX_BODY, [LITERAL_CHARS]),
        Prod(REGEX_BODY, ["(", LITERAL_CHARS, ")", MULTIPLIER]),
        Prod(REGEX_BODY, [CHAR_CLASS]),
        Prod(REGEX_BODY, [CHAR_CLASS, MULTIPLIER]),
        Prod(REGEX_BODY, [SPECIAL_GROUP]),
        Prod(REGEX_BODY, [SPECIAL_GROUP, MULTIPLIER]),
        Prod(REGEX_BODY, [DOT]),
        Prod(REGEX_BODY, [DOT, MULTIPLIER]),
        Prod(REGEX_BODY, [CHOICE]),
        Prod(REGEX_BODY, [CHOICE, MULTIPLIER]),
        Prod(REGEX_BODY, ["(", REGEX_BODY, ")"]),
        Prod(REGEX_BODY, [REGEX_BODY, REGEX_BODY]),
        
        # The terminals for LITERAL_CHARS are added in a loop later, as there are lots.
        Prod(LITERAL_CHARS, [LITERAL_CHARS, LITERAL_CHARS]),
        
        Prod(CHAR_CLASS, ["[", CHAR_CLASS_CONTENTS_A, "]"]),
        Prod(CHAR_CLASS, ["[^", CHAR_CLASS_CONTENTS_A, "]"]),
        
        # Intentionally limited because they are not that interesting...
        Prod(CHAR_CLASS_CONTENTS_A, ["A-Z"]),
        Prod(CHAR_CLASS_CONTENTS_A, ["A-Z", CHAR_CLASS_CONTENTS_B]),
        Prod(CHAR_CLASS_CONTENTS_A, [CHAR_CLASS_CONTENTS_B]),
        Prod(CHAR_CLASS_CONTENTS_B, ["a-z"]),
        Prod(CHAR_CLASS_CONTENTS_B, ["a-z", CHAR_CLASS_CONTENTS_C]),
        Prod(CHAR_CLASS_CONTENTS_B, [CHAR_CLASS_CONTENTS_C]),
        Prod(CHAR_CLASS_CONTENTS_C, ["0-9"]),
        Prod(CHAR_CLASS_CONTENTS_C, ["0-9", CHAR_CLASS_CONTENTS_D]),
        Prod(CHAR_CLASS_CONTENTS_C, [CHAR_CLASS_CONTENTS_D]),
        Prod(CHAR_CLASS_CONTENTS_D, ["-_ "]),
        
        # Just picked a few of these which seemed commonly useful.
        #Prod(SPECIAL_GROUP, ["\\b"]), # Removed because it doesn't match actual chars, leading to some invalid generations (e.g. /\b*/). It doesn't seem interesting enough to set up a SPECIAL_GROUP_NOCHARS term to handle this case.
        Prod(SPECIAL_GROUP, ["\\d"]),
        Prod(SPECIAL_GROUP, ["\\D"]),
        Prod(SPECIAL_GROUP, ["\\n"]),
        Prod(SPECIAL_GROUP, ["\\r"]),
        Prod(SPECIAL_GROUP, ["\\s"]),
        Prod(SPECIAL_GROUP, ["\\S"]),
        Prod(SPECIAL_GROUP, ["\\t"]),
        Prod(SPECIAL_GROUP, ["\\w"]),
        Prod(SPECIAL_GROUP, ["\\W"]),
        
        Prod(DOT, ["."]),
    ]
    for ch in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_- ":
        prods.append(Prod(LITERAL_CHARS, [ch]))
    
    # Make the generated results a bit more interesting (for a significant speed penalty...).
    # The exact requirements here are tuned by hand to make the output "look good".
    prods = cfghelpers.ensure_certain_terminal_used(prods, ["?", "*", "+"])
    prods = cfghelpers.ensure_certain_terminal_used(prods, ["|"])
    prods = cfghelpers.ensure_certain_terminal_used(prods, ["["])
    
    start = nltk.grammar.Nonterminal(((("REGEX", False), False), False))
    
    return nltk.grammar.CFG(start, prods)

def generate_single_regex(seed=None, length_mean=None, length_dev=None):
    length_mean = REGEX_GENERATOR_LENGTH_MEAN if length_mean is None else length_mean
    length_dev = REGEX_GENERATOR_LENGTH_DEV if length_dev is None else length_dev
    
    cfg = regex_cfg()
    generator = cfgsampler.CFGSampler(cfg, random_seed=seed)
    regex = generator.sample(length_mean=length_mean, length_std_dev=length_dev)
    return regex

def main():
    for x in range(10,20):
        print generate_single_regex(length_mean=x, length_dev=0)

if __name__ == "__main__":
    main()
