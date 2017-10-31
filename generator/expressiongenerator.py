#!/usr/bin/env python
"""
Defines a CFG which is used to generate symbolic representations of JavaScript functions.

The generation can be parametrised to enable, disable or control certain features of the resulting expressions.
"""

import collections
import pprint
import inspect
import random
import sys
try:
    import nltk.grammar
    #import nltk.parse.generate
except ImportError:
    print "Module 'nltk' is required."
    print "Try 'sudo pip install nltk' or see http://www.nltk.org/install.html"
    sys.exit()

import jsgenerator
import cfghelpers
import cfgsampler
import regexgenerator


class ExpressionCFG:
    DEFAULT_CONFIG = {
            "cfg-search-approx-length": 50,
            "cfg-search-length-dev": 20,
            
            # If there are no input names available for a certain type, that type of input will not be generated.
            "input-names-bool": ["B1", "B2", "B3"],
            "input-names-int": ["I1", "I2", "I3"],
            "input-names-str": ["S1", "S2", "S3"],
            
            # The following input name (which must be mentioned above) is forced to be included in the result.
            "must-include-input": None,
            
            "cfg-disallow-constant-expressions": True,
            
            "allow-eval": True,
            "inline-function-definitions": True,
            "allow-regex": True,
            
            # Whether inputs are fetched directly in the code where they are used, or separated into an "input block"
            # at the start opf the code.
            "generate-inputs-directly": False,
            
            # The function names used to fetch the inputs. These strings are format strings which can be formatted with
            # a parameter representing the variable name of the input bing fetched.
            "input-function-name-template-bool": "artemisInputBoolean(\"{}\")",
            "input-function-name-template-int": "artemisInputInteger(\"{}\")",
            "input-function-name-template-str": "artemisInputString(\"{}\")",
            
            # This is used in formgenerator to ensure that validation expressions are boolean-valued.
            "boolean-expressions-only": False,
        }
    # TODO: Add more config options.
    
    def __init__(self, config={}, random_seed=None):
        self.config = self.DEFAULT_CONFIG
        self.config.update(config)
        
        self._build_cfg() # Sets self.cfg, which is to br treated as read-only from here on.
        
        self._cfgsampler = cfgsampler.CFGSampler(self.cfg, random_seed=random_seed)
        
        self._jsgenerator_seed = hash(random_seed) if random_seed is not None else None
        self._constants_random = random.Random()
        if random_seed is not None:
            self._constants_random.seed(hash(random_seed) * 541) # 541 is not magic, it's the 100th prime, just to start from a different spot than _jsgenerator_seed.
        
        self._constant_generating_functions = [
                self._generate_boolean_constant_value,
                self._generate_integer_constant_value,
                self._generate_string_constant_value,
                self._generate_constant_integer_set,
                self._generate_constant_string_set,
                self._generate_regex
            ]
    
    def _build_cfg(self):
        # Build the CFG according to the config parameters and heuristics.
        
        # Shortcuts for writing the list of productions
        # NB: WeightedProduction is not supported by cfgsampler.CFGSampler, so the weights are not used in the current version.
        WP = cfghelpers.WeightedProduction
        nt = nltk.grammar.Nonterminal
        prods = []
        
        # The starting symbol
        if self.config["boolean-expressions-only"]:
            prods.append(WP(nt("START"), [nt("BOOL_FUN")]))
        else:
            prods.extend([
                    WP(nt("START"), [nt("BOOL_FUN")]),
                    WP(nt("START"), [nt("INT_FUN")]),
                    WP(nt("START"), [nt("STR_FUN")]),
                ])
        
        # Functions
        prods.extend([
                WP(nt("BOOL_FUN"), [jsgenerator.BooleanFunction, nt("BOOL_ITE")]),
                WP(nt("INT_FUN"), [jsgenerator.IntegerFunction, nt("INT_ITE")]),
                WP(nt("STR_FUN"), [jsgenerator.StringFunction, nt("STR_ITE")]),
            ])
        # TODO: These do not need to begin with ITE, they could as well be BOOL_EXPR (etc.). This is just a stylistic choice which should be controlled by the config.
        
        # If-then-else expressions
        prods.extend([
                WP(nt("BOOL_ITE"), [jsgenerator.BooleanITE, nt("BOOL_EXPR"), nt("BOOL_EXPR"), nt("BOOL_EXPR")]),
                WP(nt("INT_ITE"), [jsgenerator.IntegerITE, nt("BOOL_EXPR"), nt("INT_EXPR"), nt("INT_EXPR")]),
                WP(nt("STR_ITE"), [jsgenerator.StringITE, nt("BOOL_EXPR"), nt("STR_EXPR"), nt("STR_EXPR")]),
            ])
        
        # Eval expressions
        if self.config["allow-eval"]:
            prods.extend([
                    WP(nt("BOOL_EVAL"), [jsgenerator.BooleanEval, nt("BOOL_EXPR")]),
                    WP(nt("INT_EVAL"), [jsgenerator.IntegerEval, nt("INT_EXPR")]),
                    WP(nt("STR_EVAL"), [jsgenerator.StringEval, nt("STR_EXPR")]),
                ])
        
        # Boolean expressions
        prods.extend([
                WP(nt("BOOL_EXPR"), [nt("BOOL_INPUT")], 3.0), # TODO: Make weights configurable
                WP(nt("BOOL_EXPR"), [nt("BOOL_ITE")]),
                WP(nt("BOOL_EXPR"), [nt("BOOL_FUN")]),
                WP(nt("BOOL_EXPR"), [nt("BOOL_CONST")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.BooleanNot, nt("BOOL_EXPR")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.BooleanBinaryOperation, nt("BOOL_EXPR"), nt("BOOL_OP"), nt("BOOL_EXPR")], 5.0), # TODO: Make weights configurable
                WP(nt("BOOL_EXPR"), [jsgenerator.BooleanBinaryOperation, nt("INT_EXPR"), nt("INT_CMP"), nt("INT_EXPR")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.BooleanBinaryOperation, nt("STR_EXPR"), nt("STR_CMP"), nt("STR_EXPR")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.IntToBool, nt("INT_EXPR")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.StrToBool, nt("STR_EXPR")]),
                WP(nt("BOOL_EXPR"), [jsgenerator.RegexTest, nt("STR_EXPR"), self._generate_regex]),
                
                # TODO: For now we only have constants in the sets. This is not needed, but done to ensure that an input is used as the element being tested.
                WP(nt("BOOL_EXPR"), [jsgenerator.ElementInSet, nt("INT_EXPR"), self._generate_constant_integer_set]),
                WP(nt("BOOL_EXPR"), [jsgenerator.ElementInSet, nt("STR_EXPR"), self._generate_constant_string_set]),
            ])
        if self.config["allow-eval"]:
            prods.append(WP(nt("BOOL_EXPR"), [nt("BOOL_EVAL")]))
        
        # Integer expressions
        prods.extend([
                WP(nt("INT_EXPR"), [nt("INT_INPUT")]),
                WP(nt("INT_EXPR"), [nt("INT_ITE")]),
                WP(nt("INT_EXPR"), [nt("INT_FUN")]),
                WP(nt("INT_EXPR"), [nt("INT_CONST")]),
                WP(nt("INT_EXPR"), [jsgenerator.IntegerBinaryOperation, nt("INT_EXPR"), nt("INT_OP"), nt("INT_EXPR")]),
                WP(nt("INT_EXPR"), [jsgenerator.StringLength, nt("STR_EXPR")]),
                WP(nt("INT_EXPR"), [jsgenerator.BoolToInt, nt("BOOL_EXPR")]),
                WP(nt("INT_EXPR"), [jsgenerator.StrToInt, nt("STR_EXPR")]),
            ])
        if self.config["allow-eval"]:
            prods.append(WP(nt("INT_EXPR"), [nt("INT_EVAL")]))
        
        # String expressions
        prods.extend([
                WP(nt("STR_EXPR"), [nt("STR_INPUT")]),
                WP(nt("STR_EXPR"), [nt("STR_ITE")]),
                WP(nt("STR_EXPR"), [nt("STR_FUN")]),
                WP(nt("STR_EXPR"), [nt("STR_CONST")]),
                WP(nt("STR_EXPR"), [jsgenerator.StringBinaryOperation, nt("STR_EXPR"), nt("STR_OP"), nt("STR_EXPR")]),
                WP(nt("STR_EXPR"), [jsgenerator.BoolToStr, nt("BOOL_EXPR")]),
                WP(nt("STR_EXPR"), [jsgenerator.IntToStr, nt("INT_EXPR")]),
                WP(nt("STR_EXPR"), [jsgenerator.StringReplace, nt("STR_EXPR"), self._generate_string_constant_value, self._generate_string_constant_value]),
                WP(nt("STR_EXPR"), [jsgenerator.StringRegexReplace, nt("STR_EXPR"), self._generate_regex, self._generate_string_constant_value]),
            ])
        if self.config["allow-eval"]:
            prods.append(WP(nt("STR_EXPR"), [nt("STR_EVAL")]))
        
        # Boolean operators
        for opcode in jsgenerator.Op.BOOLEAN_BOOLEAN_OPS:
            prods.append(WP(nt("BOOL_OP"), [opcode]))
        
        # Integer operators
        for opcode in jsgenerator.Op.BOOLEAN_INTEGER_OPS:
            prods.append(WP(nt("INT_CMP"), [opcode]))
        for opcode in jsgenerator.Op.INTEGER_INTEGER_OPS:
            prods.append(WP(nt("INT_OP"), [opcode]))
        
        # String operators
        for opcode in jsgenerator.Op.BOOLEAN_STRING_OPS:
            prods.append(WP(nt("STR_CMP"), [opcode]))
        for opcode in jsgenerator.Op.STRING_STRING_OPS:
            prods.append(WP(nt("STR_OP"), [opcode]))
        
        # Inputs
        prods.extend([
                WP(nt("BOOL_INPUT"), [jsgenerator.BooleanInput, nt("BOOL_VAR_NAME")]),
                WP(nt("INT_INPUT"), [jsgenerator.IntegerInput, nt("INT_VAR_NAME")]),
                WP(nt("STR_INPUT"), [jsgenerator.StringInput, nt("STR_VAR_NAME")]),
            ])
        
        # Input variable names
        # N.B. This means that if any of these sets of names are empty, inputs of that type can't be generated.
        for name in self.config["input-names-bool"]:
            prods.append(WP(nt("BOOL_VAR_NAME"), [name]))
        for name in self.config["input-names-int"]:
            prods.append(WP(nt("INT_VAR_NAME"), [name]))
        for name in self.config["input-names-str"]:
            prods.append(WP(nt("STR_VAR_NAME"), [name]))
        
        # Constants
        prods.extend([
                WP(nt("BOOL_CONST"), [jsgenerator.BooleanConstant, self._generate_boolean_constant_value]),
                WP(nt("INT_CONST"), [jsgenerator.IntegerConstant, self._generate_integer_constant_value]),
                WP(nt("STR_CONST"), [jsgenerator.StringConstant, self._generate_string_constant_value]),
            ])
        
        if self.config["cfg-disallow-constant-expressions"]:
            expressions = [nt("BOOL_EXPR"), nt("INT_EXPR"), nt("STR_EXPR")]
            inputs = [nt("BOOL_INPUT"), nt("INT_INPUT"), nt("STR_INPUT")]
            exemptions = [nt("BOOL_CONST"), nt("INT_CONST"), nt("STR_CONST")]
            
            prods = cfghelpers.ensure_certain_containment(prods, expressions, inputs, exemptions)
            
            start = nltk.grammar.Nonterminal(("START", False))
        else:
            start = nltk.grammar.Nonterminal("START")
        
        if self.config["must-include-input"] is not None:
            prods = cfghelpers.ensure_certain_terminal_used(prods, self.config["must-include-input"])
            start = nltk.grammar.Nonterminal((start.symbol(), False))
        
        self.cfg = nltk.grammar.CFG(start, prods)
        
    
    def generate_expr(self):
        approx_length = self.config["cfg-search-approx-length"]
        length_dev = self.config["cfg-search-length-dev"]
        
        # Generate a single parse tree from the CFG.
        terminal_parse_tree = self._cfgsampler.sample(length_mean=approx_length, length_std_dev=length_dev, expression_builder=cfgsampler.TerminalParseTree)
        parse_tree = terminal_parse_tree.parse_tree()
        
        expr = self._construct_expr_from_parse_tree(parse_tree)
        
        result = GeneratedExpression(parse_tree, expr, self.config, self._jsgenerator_seed)

        # We want a fresh seed for each subsequent call to generate_expr.
        if self._jsgenerator_seed is not None:
            self._jsgenerator_seed = hash(self._jsgenerator_seed + 1)
        
        return result
    
    def _construct_expr_from_parse_tree(self, parse_tree):
        """
        Takes a list-of-lists (with arbitrarily deep nesting) representing the parse tree of a symbolic expression
        generated by the CFG.
        Returns an expression object (of type jsgenerator.CodeGenerator).
        """
        clean_tree = self._clean_parse_tree(parse_tree)
        #pprint.pprint(clean_tree)
        return self._construct_expr_from_cleaned_tree(clean_tree)
    
    def _clean_parse_tree(self, parse_tree):
        """
        Cleans up a given parse tree by flattening out all the singleton values and any empty lists, while leaving the rest
        of the structure as it was before.
        
        N.B. The trees returned by cfgsampler.CFGSampler do not require much cleaning.
        The only expected difference is to change ['B1'] -> 'B1' for the names of inputs.
        """
        def islist(xs):
            return isinstance(xs, collections.Iterable) and not isinstance(xs, basestring)
        
        if islist(parse_tree):
            # Remove any empty list children
            children = filter(lambda x: x != [], parse_tree)
            if len(children) == 0:
                # If the top-level tree is an empty list, then just return it.
                return []
            elif len(children) == 1:
                # Flatten a singleton list.
                return self._clean_parse_tree(children[0])
            else:
                # Return the cleaned children.
                return map(self._clean_parse_tree, children)
        else:
            # Return values directly.
            return parse_tree
    
    def _construct_expr_from_cleaned_tree(self, parse_tree):
        """
        Takes a CFG parse tree which has been cleaned by _clean_parse_tree and parses it into an expression.
        """
        # The format of the lists is expected to be as follows:
        # [<CodeGenerator subclass>, ..., ..., ...]
        # The first item is the class of this production, the remaining items are its arguments.
        # In which case we return SubClass(recurse(...), recurse(...), recurse(...)).
        # Some lists do not have this structure, they are used to build constant parts of the parse tree and are just
        # returned as we find them.
        
        def islist(xs):
            return isinstance(xs, collections.Iterable) and not isinstance(xs, basestring)
        def isvalue(x):
            # We expect the following types of values in the tree:
            #   * Operations
            #   * Input names
            #   * Functions which generate the constant values.
            return not islist(x) and (x in jsgenerator.Op.ALL_OPS
                    or x in self.config["input-names-bool"]
                    or x in self.config["input-names-int"]
                    or x in self.config["input-names-str"]
                    or x in self._constant_generating_functions)
        
        if islist(parse_tree) and len(parse_tree) > 0 and inspect.isclass(parse_tree[0]) and issubclass(parse_tree[0], jsgenerator.CodeGenerator):
            # We have a node-producing subtree.
            args = map(self._construct_expr_from_cleaned_tree, parse_tree[1:])
            expr = parse_tree[0](*args)
            return expr
            
        elif isvalue(parse_tree):
            # The recursion has bottomed out, so just return the value directly.
            return parse_tree
            
        else:
            # We do not expect any other types of structure, except a list producing a node, or a constant value.
            pprint.pprint(parse_tree)
            raise ValueError("Unexpected structure in the expression parse tree.")
    
    def _generate_boolean_constant_value(self):
        return self._constants_random.choice([True, False])
    
    def _generate_integer_constant_value(self):
        # Make 0 and 1 disproportionately more common, to make the constraints "look realistic".
        return self._constants_random.choice(
            [0, 1, self._constants_random.randint(0, 10), self._constants_random.randint(0, 100), self._constants_random.randint(-100, 200)])
    
    def _generate_string_constant_value(self):
        length =  self._constants_random.randint(0, 5)
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        # TODO: Configurable alphabet.
        return "".join(self._constants_random.sample(alphabet, length))
    
    def _generate_constant_integer_set(self):
        length =  self._constants_random.randint(3,10)
        return [self._generate_integer_constant_value() for _ in range(length)]
    
    def _generate_constant_string_set(self):
        length =  self._constants_random.randint(3, 10)
        return [self._generate_string_constant_value() for _ in range(length)]
    
    def _generate_regex(self):
        # TODO: Maybe include a few "common cases" which we can generate exactly (whitespace or \r stripping, empty strings, email addresses (actually quite tricky), ...)?
        # N.B. These expressions must be safe to use within /../.
        
        return regexgenerator.generate_single_regex(seed=self._constants_random.randint(0, 2**32-1)) # This specific range because we happen to know this seed is heading to a numpy RandomState object.
    

class GeneratedExpression:
    """
    The result returned by ExpressionCFG.generate_expr().
    
    This class represents a particular symbolic expression (represented as a string in the to_expr() method).
    It can also be realised as a JavaScript snippet implementing that expression.
    A random JavaScript program implementing the expression is returned with each call to to_js().
    """
    def __init__(self, parse_tree, expr, config, jsgenerator_seed):
        self.parse_tree = parse_tree
        self.expr = expr
        self._config = config
        self._jsgenerator_seed = hash(jsgenerator_seed) if jsgenerator_seed is not None else None
    def to_expr(self):
        return self.expr.expr()
    def to_js(self, callback=None):
        code = self.expr.random_code(jsgenerator.GeneratorState(self._config, random_seed=self._jsgenerator_seed))
        self._refresh_seed()
        return code.to_js(self._config, callback)
    def _refresh_seed(self):
        # If a seed has been set, we need to refresh it each time we use it, so subsequent calls to to_js() return different results.
        if self._jsgenerator_seed is not None:
            self._jsgenerator_seed = hash(self._jsgenerator_seed * 7919) # 7919 is not magic, it's just a large-ish prime (the 1000th).


def _demo():
    demo_config = {"allow-eval": False}
    
    cfg = ExpressionCFG(config=demo_config)
    
    #print "The CFG:"
    #print cfg.cfg
    #print
    
    expr = cfg.generate_expr()
    if expr is None:
        print "Ran out of tries during the expression generation!"
        return
    
    #print "The generated parse tree:"
    #pprint.pprint(expr.parse_tree)
    #print
    print "Generated expression:"
    print expr.to_expr()
    print
    print "Generated JS code:"
    print expr.to_js("console.log")
    

if __name__ == "__main__":
    _demo()
