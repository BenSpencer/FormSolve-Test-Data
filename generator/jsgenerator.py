#!/usr/bin/env python
"""
The functions and classes for generating JavaScript snippets from a constraint.

The idea is that for each part of a constraint, we may have multiple ways to implement it in JavaScript.
Therefore we can build these together to generate different JavaScript programs which implement the given constraints.

This is essentially another CFG, or an extension the the parse-tree generating CFG.

N.B. Changes in this file need to also be added to the generator in expressiongenerator.py in order to have any effect.
"""

import sys
import random
import collections
try:
    import jsbeautifier
except ImportError:
    print "Module 'jsbeautifier' is required."
    print "Try 'sudo pip install jsbeautifier' or see https://github.com/beautify-web/js-beautify"
    sys.exit()


# TODO: By this strategy we will only generate quite a restricted type of program - e.g. we will not generate loops,
# concrete branches, etc.
# This might be mitigated by generating higher-level constructs which can be translated into loops.
# e.g. If we generate a boolean expression ItemInSet(<x:X>, <s:Constant-set-of-X>).


# Base class for all code generating expressions.
class CodeGenerator:
    def expr(self):
        """
        Returns a human-readable, but non-executable representation of the expression.
        """
        raise NotImplementedError("Abstract base method")
    def random_code(self, generator_state):
        """
        Returns a Code object, giving JavaScript strings for an expression and its prerequisites.
        """
        raise NotImplementedError("Abstract base method")

# These typed expression classes are used to enforce type correctness of the expressions.
# They do not generate any code themselves.
class BooleanExpression(CodeGenerator):
    pass
class IntegerExpression(CodeGenerator):
    pass
class StringExpression(CodeGenerator):
    pass


# Helper - Operations
class Op:
    # N.B When updating any of these, make sure to also update the operation type sets below!
    # These are [most of] the operations from Artemis' symbolic language.
    BOOL_EQ         = 1
    BOOL_NEQ        = 2
    BOOL_SEQ        = 3
    BOOL_SNEQ       = 4
    INT_ADD         = 5
    INT_SUBTRACT    = 6
    INT_MULTIPLY    = 7
    INT_DIVIDE      = 8
    INT_EQ          = 9
    INT_NEQ         = 10
    INT_SEQ         = 11
    INT_SNEQ        = 12
    INT_LEQ         = 13
    INT_LT          = 14
    INT_GEQ         = 15
    INT_GT          = 16
    INT_MODULO      = 17
    STRING_CONCAT   = 18
    STRING_EQ       = 19
    STRING_NEQ      = 20
    STRING_SEQ      = 21
    STRING_SNEQ     = 22
    STRING_LT       = 23
    STRING_LEQ      = 24
    STRING_GT       = 25
    STRING_GEQ      = 26
    # TODO: '=='/'===' and '!='/'!==' behave the same, as we currently only generate well-typed expressions without
    # implicit coercions.
    
    # N.B. Most of the string functions are implemented as their own functions in Artemis, not as operations.
    # So these are not included for now.
    
    # These are some new ones, added for this generator.
    BOOL_AND        = 101
    BOOL_OR         = 102
    
    # These are sets which can be used to check the operation type of a given operation.
    ALL_BOOL_OPS = frozenset(range(BOOL_EQ, BOOL_SNEQ+1) + range(BOOL_AND, BOOL_OR+1))
    ALL_INT_OPS = frozenset(range(INT_ADD, INT_MODULO+1))
    ALL_STRING_OPS = frozenset(range(STRING_CONCAT, STRING_GEQ+1))
    ALL_OPS = frozenset(range(BOOL_EQ, STRING_GEQ+1) + range(BOOL_AND, BOOL_OR+1))
    
    BOOLEAN_BOOLEAN_OPS = ALL_BOOL_OPS
    BOOLEAN_INTEGER_OPS = frozenset(range(INT_EQ, INT_GT+1))
    INTEGER_INTEGER_OPS = frozenset(range(INT_ADD, INT_DIVIDE+1) + [INT_MODULO])
    BOOLEAN_STRING_OPS = frozenset(range(STRING_EQ, STRING_GEQ+1))
    STRING_STRING_OPS = frozenset([STRING_CONCAT])
    
    @classmethod
    def to_str(cls, op):
        op_strs = {
            cls.BOOL_EQ:        "==",
            cls.BOOL_NEQ:       "!=",
            cls.BOOL_SEQ:       "===",
            cls.BOOL_SNEQ:      "!==",
            cls.INT_ADD:        "+",
            cls.INT_SUBTRACT:   "-",
            cls.INT_MULTIPLY:   "*",
            cls.INT_DIVIDE:     "/",
            cls.INT_EQ:         "==",
            cls.INT_NEQ:        "!=",
            cls.INT_SEQ:        "===",
            cls.INT_SNEQ:       "!==",
            cls.INT_LEQ:        "<=",
            cls.INT_LT:         "<",
            cls.INT_GEQ:        ">=",
            cls.INT_GT:         ">",
            cls.INT_MODULO:     "%",
            cls.STRING_CONCAT:  "+",
            cls.STRING_EQ:      "==",
            cls.STRING_NEQ:     "!=",
            cls.STRING_SEQ:     "===",
            cls.STRING_SNEQ:    "!==",
            cls.STRING_LT:      "<",
            cls.STRING_LEQ:     "<=",
            cls.STRING_GT:      ">",
            cls.STRING_GEQ:     ">=",
            cls.BOOL_AND:       "&&",
            cls.BOOL_OR:        "||",
        }
        return op_strs[op]

# Binary operation expressions
class BooleanBinaryOperation(BooleanExpression):
    def __init__(self, lhs, op, rhs):
        self.lhs = lhs
        self.op = op
        self.rhs = rhs
        
        # TODO: Enforce type checks.
        valid_bool_op = isinstance(lhs, BooleanExpression) and isinstance(rhs, BooleanExpression) and op in Op.BOOLEAN_BOOLEAN_OPS
        valid_int_op = isinstance(lhs, IntegerExpression) and isinstance(rhs, IntegerExpression) and op in Op.BOOLEAN_INTEGER_OPS
        valid_str_op = isinstance(lhs, StringExpression) and isinstance(rhs, StringExpression) and op in Op.BOOLEAN_STRING_OPS
        assert(valid_bool_op or valid_int_op or valid_str_op)
    
    def expr(self):
        return "({} {} {})".format(self.lhs.expr(), Op.to_str(self.op), self.rhs.expr())
    
    def random_code(self, generator_state):
        lhs = self.lhs.random_code(generator_state)
        rhs = self.rhs.random_code(generator_state)
        
        merged_vars, var_merge_prefix = InputVariable.merge_vars(lhs.free_vars, rhs.free_vars)
        
        opts = []
        full_expr = "{} {} {}".format(lhs.value, Op.to_str(self.op), rhs.value)
        tmp = generator_state.tmp("b")
        tmp2 = generator_state.tmp("b")
        
        # Just the expression itself
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix,
                         "({})".format(full_expr),
                         merged_vars))
        
        # Create a new variable with the expression
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {} = {};".format(tmp, full_expr),
                         tmp,
                         merged_vars))
        
        # Create two variables and return the expression.
        # N.B. It is safe to reuse tmp, as we will only choose one of these options.
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {} = {}; var {} = {};".format(tmp, lhs.value, tmp2, rhs.value),
                         "{} {} {}".format(tmp, Op.to_str(self.op), tmp2),
                         merged_vars))
        
        # An IF creates a new boolean variable.
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = true; }} else {{ {} = false; }}".format(tmp, full_expr, tmp, tmp),
                         tmp,
                         merged_vars))
        
        # Alternative shape for the IF.
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {} = false; if ({}) {{ {} = true; }}".format(tmp, full_expr, tmp),
                         tmp,
                         merged_vars))
        
        # We can create more interesting IFs if we know the operation.
        if self.op == Op.BOOL_AND:
            # Four versions, with just structural/ordering changes.
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = {}; }} else {{ {} = false; }}".format(tmp, lhs.value, tmp, rhs.value, tmp),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = {}; }} else {{ {} = false; }}".format(tmp, rhs.value, tmp, lhs.value, tmp),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + "var {}; if ({}) {{ {} {} = {}; }} else {{ {} = false; }}".format(tmp, lhs.value, rhs.prefix, tmp, rhs.value, tmp),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + rhs.prefix + "var {}; if ({}) {{ {} {} = {}; }} else {{ {} = false; }}".format(tmp, rhs.value, lhs.prefix, tmp, lhs.value, tmp),
                             tmp,
                             merged_vars))
        elif self.op == Op.BOOL_OR:
            # Four versions, with just structural/ordering changes.
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = true; }} else {{ {} = {}; }}".format(tmp, lhs.value, tmp, tmp, rhs.value),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = true; }} else {{ {} = {}; }}".format(tmp, rhs.value, tmp, tmp, lhs.value),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + "var {}; if ({}) {{ {} = true; }} else {{ {} {} = {}; }}".format(tmp, lhs.value, tmp, rhs.prefix, tmp, rhs.value),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + rhs.prefix + "var {}; if ({}) {{ {} = true; }} else {{ {} {} = {}; }}".format(tmp, rhs.value, tmp, lhs.prefix, tmp, lhs.value),
                             tmp,
                             merged_vars))
        elif self.op == Op.BOOL_EQ:
            # TODO: Could add some ordering variations on this as well...
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ if ({}) {{ {} = true; }} else {{ {} = false; }} }} else {{ if ({}) {{ {} = false; }} else {{ {} = true; }} }}".format(tmp, lhs.value, rhs.value, tmp, tmp, rhs.value, tmp, tmp),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = {}; }} else {{ {} = !{}; }}".format(tmp, lhs.value, tmp, rhs.value, tmp, rhs.value),
                             tmp,
                             merged_vars))
        elif self.op == Op.BOOL_NEQ:
            # TODO: Could add some ordering variations on this as well...
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ if ({}) {{ {} = false; }} else {{ {} = true; }} }} else {{ if ({}) {{ {} = true; }} else {{ {} = false; }} }}".format(tmp, lhs.value, rhs.value, tmp, tmp, rhs.value, tmp, tmp),
                             tmp,
                             merged_vars))
            opts.append(Code(lhs.decl + rhs.decl,
                             var_merge_prefix + lhs.prefix + rhs.prefix + "var {}; if ({}) {{ {} = !{}; }} else {{ {} = {}; }}".format(tmp, lhs.value, tmp, rhs.value, tmp, rhs.value),
                             tmp,
                             merged_vars))
        
        return generator_state.random.choice(opts)

class IntegerBinaryOperation(IntegerExpression):
    def __init__(self, lhs, op, rhs):
        self.lhs = lhs
        self.op = op
        self.rhs = rhs
        
        assert(isinstance(lhs, IntegerExpression))
        assert(isinstance(rhs, IntegerExpression))
        assert(op in Op.INTEGER_INTEGER_OPS)
    
    def expr(self):
        return "({} {} {})".format(self.lhs.expr(), Op.to_str(self.op), self.rhs.expr())
    
    def random_code(self, generator_state):
        lhs = self.lhs.random_code(generator_state)
        rhs = self.rhs.random_code(generator_state)
        
        merged_vars, var_merge_prefix = InputVariable.merge_vars(lhs.free_vars, rhs.free_vars)
        
        opts = []
        full_expr = "{} {} {}".format(lhs.value, Op.to_str(self.op), rhs.value)
        tmp = generator_state.tmp("x")
        tmp2 = generator_state.tmp("x")
        
        # Just the expression itself
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix,
                         "({})".format(full_expr),
                         merged_vars))
        
        # Create a new variable with the expression
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "{} = {};".format(tmp, full_expr),
                         tmp,
                         merged_vars))
        
        # Create two variables and return the expression.
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "{} = {}; {} = {};".format(tmp, lhs.value, tmp2, rhs.value),
                         "{} {} {}".format(tmp, Op.to_str(self.op), tmp2),
                         merged_vars))
        
        return generator_state.random.choice(opts)

class StringBinaryOperation(StringExpression):
    def __init__(self, lhs, op, rhs):
        self.lhs = lhs
        self.op = op
        self.rhs = rhs
        
        assert(isinstance(lhs, StringExpression))
        assert(isinstance(rhs, StringExpression))
        assert(op in Op.STRING_STRING_OPS)
    
    def expr(self):
        return "({} {} {})".format(self.lhs.expr(), Op.to_str(self.op), self.rhs.expr())
    
    def random_code(self, generator_state):
        lhs = self.lhs.random_code(generator_state)
        rhs = self.rhs.random_code(generator_state)
        
        merged_vars, var_merge_prefix = InputVariable.merge_vars(lhs.free_vars, rhs.free_vars)
        
        opts = []
        full_expr = "{} {} {}".format(lhs.value, Op.to_str(self.op), rhs.value)
        tmp = generator_state.tmp("x")
        tmp2 = generator_state.tmp("x")
        
        # Just the expression itself
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix,
                         "({})".format(full_expr),
                         merged_vars))
        
        # Create a new variable with the expression
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {} = {};".format(tmp, full_expr),
                         tmp,
                         merged_vars))
        
        # Create two variables and return the expression.
        opts.append(Code(lhs.decl + rhs.decl,
                         var_merge_prefix + lhs.prefix + rhs.prefix + "var {} = {}; var {} = {};".format(tmp, lhs.value, tmp2, rhs.value),
                         "{} {} {}".format(tmp, Op.to_str(self.op), tmp2),
                         merged_vars))
        
        return generator_state.random.choice(opts)

# Other boolean operations
class BooleanNot(BooleanExpression):
    def __init__(self, bool_expr):
        assert(isinstance(bool_expr, BooleanExpression))
        self.bool_expr = bool_expr
    def expr(self):
        return "not({})".format(self.bool_expr.expr())
    def random_code(self, generator_state):
        child = self.bool_expr.random_code(generator_state)
        
        opts = []
        tmp = generator_state.tmp("b")
        
        # Just the expression
        opts.append(Code(child.decl, child.prefix, "!({})".format(child.value), child.free_vars))
        
        # Create a new variable
        opts.append(Code(child.decl, child.prefix + "var {} = !({});".format(tmp, child.value), tmp, child.free_vars))
        
        # A reversed IF statement
        opts.append(Code(child.decl, child.prefix + "var {}; if ({}) {{ {} = false; }} else {{ {} = true; }}".format(tmp, child.value, tmp, tmp), tmp, child.free_vars))
        
        return generator_state.random.choice(opts)

# Some string methods
class StringLength(IntegerExpression):
    def __init__(self, str_expr):
        assert(isinstance(str_expr, StringExpression))
        self.str_expr = str_expr
    def expr(self):
        return "len({})".format(self.str_expr.expr())
    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        
        opts = []
        tmp = generator_state.tmp("l")
        
        # Just the expression itself
        opts.append(Code(child.decl, child.prefix, "({}).length".format(child.value), child.free_vars))
        
        # Create a new variable with the expression.
        opts.append(Code(child.decl, child.prefix + "var {} = ({}).length;".format(tmp, child.value), tmp, child.free_vars))
        
        return generator_state.random.choice(opts)

# TODO: More string methods.




# Coercions and conversions
class BoolToInt(IntegerExpression):
    def __init__(self, bool_expr):
        assert isinstance(bool_expr, BooleanExpression)
        self.bool_expr = bool_expr
    
    def expr(self):
        return "int({})".format(self.bool_expr.expr())
    
    def random_code(self, generator_state):
        child = self.bool_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("x")

        opts.append(Code(child.decl, child.prefix, "({}) ? 1 : 0".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "({}) | 0".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "~~({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "+({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "Number({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ({}) ? 1 : 0;".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ({}) | 0;".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ~~({});".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = +({});".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = Number({});".format(tmp, child.value), tmp, child.free_vars))
        
        # N.B. Number() and parseInt() already don't have exactly matching semantics (e.g. on empty string, floats, ...)
        
        return generator_state.random.choice(opts)

class BoolToStr(StringExpression):
    def __init__(self, bool_expr):
        assert isinstance(bool_expr, BooleanExpression)
        self.bool_expr = bool_expr
    def expr(self):
        return "str({})".format(self.bool_expr.expr())
    def random_code(self, generator_state):
        child = self.bool_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("s")
        
        opts.append(Code(child.decl, child.prefix, "({}).toString()".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "String({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ({}).toString();".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = String({});".format(tmp, child.value), tmp, child.free_vars))
        
        # Include "hack" coercions, which are commonly used in real life: x+'', ''+x, etc.
        opts.append(Code(child.decl, child.prefix, "'' + ({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = '' + ({});".format(tmp, child.value), tmp, child.free_vars))

        return generator_state.random.choice(opts)

class IntToBool(BooleanExpression):
    def __init__(self, int_expr):
        assert isinstance(int_expr, IntegerExpression)
        self.int_expr = int_expr
    def expr(self):
        return "bool({})".format(self.int_expr.expr())
    def random_code(self, generator_state):
        child = self.int_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("b")
        
        opts.append(Code(child.decl, child.prefix, "({}) ? true : false".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "!!({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "Boolean({})".format(child.value), child.free_vars))
        
        opts.append(Code(child.decl, child.prefix + "var {} = ({}) ? true : false;".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = !!({});".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = Boolean({});".format(tmp, child.value), tmp, child.free_vars))
        
        # N.B. We do not generate code like x==0 here, which would be equivalent, but not showing the built-in truthiness of numbers in JavaScript.
        
        return generator_state.random.choice(opts)

class IntToStr(StringExpression):
    def __init__(self, int_expr):
        assert(isinstance(int_expr, IntegerExpression))
        self.int_expr = int_expr
    def expr(self):
        return "str({})".format(self.int_expr.expr())
    def random_code(self, generator_state):
        child = self.int_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("s")
        
        opts.append(Code(child.decl, child.prefix, "({}).toString()".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "String({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ({}).toString();".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = String({});".format(tmp, child.value), tmp, child.free_vars))
        
        # Include "hack" coercions, which are commonly used in real life: x+'', ''+x, etc.
        opts.append(Code(child.decl, child.prefix, "'' + ({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = '' + ({});".format(tmp, child.value), tmp, child.free_vars))
        
        # TODO: N.B. In real JavaScript these coercions are not "perfect" because of the limited resolution of the
        # numeric type - they are not integers and not infinite precision!
        # e.g. compare 1e20.toString() and 1e21.toString() and 9999999999999999..toString()
        
        return generator_state.random.choice(opts)

class StrToBool(BooleanExpression):
    def __init__(self, str_expr):
        assert isinstance(str_expr, StringExpression)
        self.str_expr = str_expr
    def expr(self):
        return "bool({})".format(self.str_expr.expr())
    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("b")
        
        opts.append(Code(child.decl, child.prefix, "({}) ? true : false".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "!!({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "Boolean({})".format(child.value), child.free_vars))
        
        opts.append(Code(child.decl, child.prefix + "var {} = ({}) ? true : false;".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = !!({});".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = Boolean({});".format(tmp, child.value), tmp, child.free_vars))
        
        # N.B. We do not generate code like x=='' here, which would be equivalent, but not showing the built-in truthiness of strings in JavaScript.
        
        return generator_state.random.choice(opts)

class StrToInt(IntegerExpression):
    def __init__(self, str_expr):
        assert isinstance(str_expr, StringExpression)
        self.str_expr = str_expr
    def expr(self):
        return "int({})".format(self.str_expr.expr())
    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("x")

        opts.append(Code(child.decl, child.prefix, "parseInt({}, 10)".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix, "Number({})".format(child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = parseInt({}, 10);".format(tmp, child.value), tmp, child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = Number({});".format(tmp, child.value), tmp, child.free_vars))
        
        # N.B. Number() and parseInt() already don't have exactly matching semantics (e.g. on empty string, floats, ...)
        
        return generator_state.random.choice(opts)




# If-then-else expressions - used to encode the branching symbolic tree.
class GenericITE(CodeGenerator):
    def __init__(self, condition, then_expr, else_expr):
        raise NotImplementedError("GenericITE should not be instantiated directly.")
        # The subclasses are required to set self.condition, self.true_expr, and self.else_expr; and are expected to
        # enforce correct types of the child expressions.
        # The ITE implementation itself is generic, and therefore shared.
    
    def expr(self):
        return "(if {} then {} else {})".format(self.condition.expr(), self.then_expr.expr(), self.else_expr.expr())
    
    def random_code(self, generator_state):
        cond_code = self.condition.random_code(generator_state)
        then_code = self.then_expr.random_code(generator_state)
        else_code = self.else_expr.random_code(generator_state)
        
        merged_vars, var_merge_prefix = InputVariable.merge_vars(cond_code.free_vars, then_code.free_vars, else_code.free_vars)
        
        opts = []
        
        # ? operator gives a single expression.
        opts.append(Code(cond_code.decl + then_code.decl + else_code.decl,
                         var_merge_prefix + cond_code.prefix + then_code.prefix + else_code.prefix,
                         "({} ? {} : {})".format(cond_code.value, then_code.value, else_code.value),
                         merged_vars))
        
        # IF statement, using a temp var.
        tmp = generator_state.tmp()
        opts.append(Code(cond_code.decl + then_code.decl + else_code.decl,
                         var_merge_prefix + cond_code.prefix + "var {}; if ({}) {{ {} {} = {}; }} else {{ {} {} = {}; }}".format(tmp, cond_code.value, then_code.prefix, tmp, then_code.value, else_code.prefix, tmp, else_code.value),
                         tmp,
                         merged_vars))
        
        # Variations on the same IF.
        opts.append(Code(cond_code.decl + then_code.decl + else_code.decl,
                         var_merge_prefix + cond_code.prefix + then_code.prefix + "var {}; if ({}) {{ {} = {}; }} else {{ {} {} = {}; }}".format(tmp, cond_code.value, tmp, then_code.value, else_code.prefix, tmp, else_code.value),
                         tmp,
                         merged_vars))
        opts.append(Code(cond_code.decl + then_code.decl + else_code.decl,
                         var_merge_prefix + cond_code.prefix + else_code.prefix + "var {}; if ({}) {{ {} {} = {}; }} else {{ {} = {}; }}".format(tmp, cond_code.value, then_code.prefix, tmp, then_code.value, tmp, else_code.value),
                         tmp,
                         merged_vars))
        opts.append(Code(cond_code.decl + then_code.decl + else_code.decl,
                         var_merge_prefix + cond_code.prefix + then_code.prefix + else_code.prefix + "var {}; if ({}) {{ {} = {}; }} else {{ {} = {}; }}".format(tmp, cond_code.value, tmp, then_code.value, tmp, else_code.value),
                         tmp,
                         merged_vars))
        
        return generator_state.random.choice(opts)

# For booleans this is redundant really, but for strings and integers this will be important for encoding the symbolic tree!
class BooleanITE(GenericITE, BooleanExpression):
    def __init__(self, condition, then_expr, else_expr):
        assert(isinstance(condition, BooleanExpression))
        assert(isinstance(then_expr, BooleanExpression))
        assert(isinstance(else_expr, BooleanExpression))
        
        self.condition = condition
        self.then_expr = then_expr
        self.else_expr = else_expr

class IntegerITE(GenericITE, IntegerExpression):
    def __init__(self, condition, then_expr, else_expr):
        assert(isinstance(condition, BooleanExpression))
        assert(isinstance(then_expr, IntegerExpression))
        assert(isinstance(else_expr, IntegerExpression))
        
        self.condition = condition
        self.then_expr = then_expr
        self.else_expr = else_expr

class StringITE(GenericITE, StringExpression):
    def __init__(self, condition, then_expr, else_expr):
        assert(isinstance(condition, BooleanExpression))
        assert(isinstance(then_expr, StringExpression))
        assert(isinstance(else_expr, StringExpression))
        
        self.condition = condition
        self.then_expr = then_expr
        self.else_expr = else_expr



# Constant values
class BooleanConstant(BooleanExpression):
    def __init__(self, value):
        if callable(value):
            self.value = bool(value())
        else:
            self.value = bool(value)
    def expr(self):
        return "true" if self.value else "false"
    def random_code(self, generator_state):
        return Code("", "", "true" if self.value else "false", [])

class IntegerConstant(IntegerExpression):
    def __init__(self, value):
        if callable(value):
            self.value = int(value())
        else:
            self.value = int(value)
    def expr(self):
        return str(self.value)
    def random_code(self, generator_state):
        return Code("", "", str(self.value), [])

class StringConstant(StringExpression):
    def __init__(self, value):
        if callable(value):
            self.value = str(value())
        else:
            self.value = str(value)
    def expr(self):
        return "\"{}\"".format(self.value)
    def random_code(self, generator_state):
        return Code("", "", "\"{}\"".format(self.value), [])


# Input values
class GenericInput(CodeGenerator):
    def __init__(self, name):
        raise NotImplementedError("GenericInput should not be instantiated directly.")
        # The subclasses are required to set self.name, self._expr_name, self._fn_template_in_config, self._type, and 
        # self._tmp_name_prefix.
        # _fn_template_in_config is used to look up an alternative template to use for the function name from the
        # generator state config.
        # The implementation itself is generic, and therefore shared.
    def expr(self):
        return "{}('{}')".format(self._expr_name, self.name)
    def random_code(self, generator_state):
        if generator_state.config("generate-inputs-directly"):
            # Fetching the inputs inline - so generate the function call and no free vars.
            fn_name_template = generator_state.config(self._fn_template_in_config)
            return Code("", "", fn_name_template.format(self.name), [])
        else:
            # Fetching the inputs from the environment, so just generate a variable name and a free var.
            current_name = generator_state.tmp(self._tmp_name_prefix)
            input_var = InputVariable(self.name, self._type, current_name)
            return Code("", "", current_name, [input_var])

class BooleanInput(GenericInput, BooleanExpression):
    def __init__(self, name):
        self.name = str(name)
        self._expr_name = "input_bool"
        self._fn_template_in_config = "input-function-name-template-bool"
        self._type = InputVariable.BOOL
        self._tmp_name_prefix = "b"

class IntegerInput(GenericInput, IntegerExpression):
    def __init__(self, name):
        self.name = str(name)
        self._expr_name = "input_int"
        self._fn_template_in_config = "input-function-name-template-int"
        self._type = InputVariable.INT
        self._tmp_name_prefix = "x"

class StringInput(GenericInput, StringExpression):
    def __init__(self, name):
        self.name = str(name)
        self._expr_name = "input_string"
        self._fn_template_in_config = "input-function-name-template-str"
        self._type = InputVariable.STR
        self._tmp_name_prefix = "s"


# Functions
class GenericFunction(CodeGenerator):
    def __init__(self, body_expr):
        raise NotImplementedError("GenericFunction should not be instantiated directly.")
        # The subclasses are required to set self.body_expr and are expected to check it has the correct type.
        # The implementation itself is generic, and therefore shared.
    def expr(self):
        return self.body_expr.expr()
    def random_code(self, generator_state):
        is_top_level_function = generator_state.is_top_level_function() # N.B. Must be checked before we recurse...
        
        body = self.body_expr.random_code(generator_state)
        opts = []
        fn_name = generator_state.tmp("fn")
        
        # Work out the function signature.
        # It will be the list of free vars from the body code.
        # In the calling code this will be renamed.
        ordered_free_vars = list(body.free_vars)
        generator_state.random.shuffle(ordered_free_vars)
        fn_args_internal = ", ".join([iv.current_name for iv in ordered_free_vars])
        fn_args_internal_for_function_constructor = ", ".join(["'{}'".format(iv.current_name) for iv in ordered_free_vars]) + (", " if len(ordered_free_vars) > 0 else "")
        type_prefixes = {InputVariable.BOOL: "b", InputVariable.INT: "x", InputVariable.STR: "s"}
        external_free_vars = [InputVariable(iv.orig_name, iv.var_type, generator_state.tmp(type_prefixes[iv.var_type])) for iv in ordered_free_vars]
        fn_args_external = ", ".join([iv.current_name for iv in external_free_vars])
        # TODO: At the moment functions always capture all the body's free vars. Maybe we would like to capture some but not others?
        
        # If this is the very top-level function call, we actually want the external variables to reflect the original
        # names of each input var. So we will override external_free_vars and fn_args_external in this case.
        if is_top_level_function:
            code_input_name = "input_{}"
            external_free_vars = [InputVariable(iv.orig_name, iv.var_type, code_input_name.format(iv.orig_name)) for iv in ordered_free_vars]
            fn_args_external = ", ".join([code_input_name.format(iv.orig_name) for iv in ordered_free_vars])
        
        # Now, on with the actual code generation...
        # Normal function
        opts.append(Code(body.decl + "function {}({}) {{ {} return {}; }} ".format(fn_name, fn_args_internal, body.prefix, body.value),
                         "",
                         "{}({})".format(fn_name, fn_args_external),
                         external_free_vars))
        # Function assigned into variable
        opts.append(Code(body.decl + "var {} = function({}) {{ {} return {}; }} ".format(fn_name, fn_args_internal, body.prefix, body.value),
                         "",
                         "{}({})".format(fn_name, fn_args_external),
                         external_free_vars))
        # IIFE
        opts.append(Code(body.decl,
                         "",
                         "(function({}) {{ {} return {}; }})({}) ".format(fn_args_internal, body.prefix, body.value, fn_args_external),
                         external_free_vars))
        # Function object
        if generator_state.config("allow-eval"):
            opts.append(Code(body.decl + "var {} = Function({}\"{} return {};\"); ".format(fn_name, fn_args_internal_for_function_constructor, _escape_code_string(body.prefix), _escape_code_string(body.value)),
                             "",
                             "{}({})".format(fn_name, fn_args_external),
                             external_free_vars))
        # "Arrow" notation is ignored because it is still new and experimental.
        
        # The same functions, declared inline.
        if generator_state.config("inline-function-definitions"):
            # Normal function
            opts.append(Code(body.decl,
                             "function {}({}) {{ {} return {}; }} ".format(fn_name, fn_args_internal, body.prefix, body.value),
                             "{}({})".format(fn_name, fn_args_external),
                             external_free_vars))
            # Function assigned into variable
            opts.append(Code(body.decl,
                             "var {} = function({}) {{ {} return {}; }} ".format(fn_name, fn_args_internal, body.prefix, body.value),
                             "{}({})".format(fn_name, fn_args_external),
                             external_free_vars))
            # Function object
            if generator_state.config("allow-eval"):
                opts.append(Code(body.decl,
                                 "var {} = Function({}\"{} return {};\"); ".format(fn_name, fn_args_internal_for_function_constructor, _escape_code_string(body.prefix), _escape_code_string(body.value)),
                                 "{}({})".format(fn_name, fn_args_external),
                                 external_free_vars))
        
        return generator_state.random.choice(opts)

class BooleanFunction(GenericFunction, BooleanExpression):
    def __init__(self, body_expr):
        assert(isinstance(body_expr, BooleanExpression))
        self.body_expr = body_expr

class IntegerFunction(GenericFunction, IntegerExpression):
    def __init__(self, body_expr):
        assert(isinstance(body_expr, IntegerExpression))
        self.body_expr = body_expr

class StringFunction(GenericFunction, StringExpression):
    def __init__(self, body_expr):
        assert(isinstance(body_expr, StringExpression))
        self.body_expr = body_expr


# Eval statements
# N.B. This definition allows eval-ing of valid code, but could never generate an eval of a string input, for example.
class GenericEval(CodeGenerator):
    def __init__(self, child_expr):
        raise NotImplementedError("GenericEval should not be instantiated directly.")
        # The subclasses are required to set self.child_expr and are expected to check it has the correct type.
        # The implementation itself is generic, and therefore shared.
    def expr(self):
        return self.child_expr.expr()
    def random_code(self, generator_state):
        assert(generator_state.config("allow-eval"))
        child = self.child_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("e")
        
        # Straight eval
        opts.append(Code(child.decl,
                         child.prefix,
                         "eval(\"{}\")".format(_escape_code_string(child.value)),
                         child.free_vars))
        # ... and with the prefix eval-ed as well.
        opts.append(Code(child.decl,
                         "",
                         "eval(\"{}\")".format(_escape_code_string(child.prefix + child.value)),
                         child.free_vars))
        
        # Save the string, then eval it
        opts.append(Code(child.decl,
                         child.prefix + "var {} = \"{}\";".format(tmp, _escape_code_string(child.value)),
                         "eval({})".format(tmp),
                         child.free_vars))
        # ... and with the prefix eval-ed as well.
        opts.append(Code(child.decl,
                         "var {} = \"{}\";".format(tmp, _escape_code_string(child.prefix + child.value)),
                         "eval({})".format(tmp),
                         child.free_vars))
        
        return generator_state.random.choice(opts)

class BooleanEval(GenericEval, BooleanExpression):
    def __init__(self, child_expr):
        assert(isinstance(child_expr, BooleanExpression))
        self.child_expr = child_expr

class IntegerEval(GenericEval, IntegerExpression):
    def __init__(self, child_expr):
        assert(isinstance(child_expr, IntegerExpression))
        self.child_expr = child_expr

class StringEval(GenericEval, StringExpression):
    def __init__(self, child_expr):
        assert(isinstance(child_expr, StringExpression))
        self.child_expr = child_expr


# Set membership tests
class ElementInSet(BooleanExpression):
    def __init__(self, child_expr, values_to_check):
        assert isinstance(child_expr, IntegerExpression) or isinstance(child_expr, StringExpression)
        assert callable(values_to_check)
        self.child_expr = child_expr
        self.values_to_check = values_to_check()
    def expr(self):
        return "({} in {})".format(self.child_expr.expr(), self.values_to_check)
    def random_code(self, generator_state):
        child = self.child_expr.random_code(generator_state)
        opts = []
        tmp_result = generator_state.tmp("b")
        tmp_array = generator_state.tmp("opts")
        tmp_idx = generator_state.tmp("idx")
        
        array_literal = str(self.values_to_check)
        create_array = "var {} = {};".format(tmp_array, array_literal)
        
        # Test membership
        opts.append(Code(child.decl,
                         child.prefix + create_array,
                         "{}.indexOf({}) > -1".format(tmp_array, child.value),
                         child.free_vars))
        
        # Test membership, saving into variable
        opts.append(Code(child.decl,
                         child.prefix + create_array + "var {} = {}.indexOf({}) > -1;".format(tmp_result, tmp_array, child.value),
                         tmp_result,
                         child.free_vars))
        
        # Check via loop
        opts.append(Code(child.decl,
                         child.prefix + create_array + "var {} = false; for (var {} = 0; {} < {}.length; {}++) {{ if ({}[{}] == {}) {{ {} = true; }} }}".format(tmp_result, tmp_idx, tmp_idx, tmp_array, tmp_idx, tmp_array, tmp_idx, child.value, tmp_result),
                         tmp_result,
                         child.free_vars))
        
        # Check via loop, breaking early
        opts.append(Code(child.decl,
                         child.prefix + create_array + "var {} = false; for (var {} = 0; {} < {}.length; {}++) {{ if ({}[{}] == {}) {{ {} = true; break; }} }}".format(tmp_result, tmp_idx, tmp_idx, tmp_array, tmp_idx, tmp_array, tmp_idx, child.value, tmp_result),
                         tmp_result,
                         child.free_vars))
        
        # TODO: Check via a forEach loop
        # TODO: Some new browsers support Array.prototype.includes, but I will not generate that here.
        
        return generator_state.random.choice(opts)


# Regular expression tests
class RegexTest(BooleanExpression):
    def __init__(self, str_expr, regex):
        assert isinstance(str_expr, StringExpression)
        self.str_expr = str_expr
        if callable(regex):
            self.regex = str(regex())
        else:
            self.regex = str(regex)
        # For test it is nicer to match the whole string.
        self.regex = "^{}$".format(self.regex)
    
    def expr(self):
        return "regex-test({}, /{}/)".format(self.str_expr.expr(), self.regex)
    
    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("re")
        
        # TODO: We do not handle flags.
        # TODO: Should we also generate calls to RegExp.exec, RegExp.match, ...?
        
        opts.append(Code(child.decl, child.prefix, "({}).match(/{}/) !== null".format(child.value, self.regex), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = new RegExp(\"{}\");".format(tmp, _escape_code_string(self.regex)), "{}.test({})".format(tmp, child.value), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = /{}/;".format(tmp, self.regex), "{}.test({})".format(tmp, child.value), child.free_vars))
        
        return generator_state.random.choice(opts)

# String replacements
class StringReplace(StringExpression):
    def __init__(self, str_expr, search, replace):
        # For simplicity the find and replacement strings are constants.
        assert isinstance(str_expr, StringExpression)
        self.str_expr = str_expr
        if callable(search):
            self.search = str(search())
        else:
            self.search = str(search)
        if callable(replace):
            self.replace = str(replace())
        else:
            self.replace = str(replace)

    def expr(self):
        return "replace({}, \"{}\", \"{}\")".format(self.str_expr.expr(), self.search, self.replace)
    
    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("s")
        
        the_search = _escape_code_string(self.search)
        the_replace = _escape_code_string(self.replace)
        
        # TODO: We do not generate any global replacements.
        
        opts.append(Code(child.decl, child.prefix, "({}).replace(\"{}\", \"{}\")".format(child.value, the_search, the_replace), child.free_vars))
        opts.append(Code(child.decl, child.prefix + "var {} = ({}).replace(\"{}\", \"{}\");".format(tmp, child.value, the_search, the_replace), tmp, child.free_vars))
        
        return generator_state.random.choice(opts)

class StringRegexReplace(StringExpression):
    def __init__(self, str_expr, regex, replace):
        # For simplicity the find and replacement regex and string are constants.
        assert isinstance(str_expr, StringExpression)
        self.str_expr = str_expr
        if callable(regex):
            self.regex = str(regex())
        else:
            self.regex = str(regex)
        if callable(replace):
            self.replace = str(replace())
        else:
            self.replace = str(replace)

    def expr(self):
        return "regex-replace({}, /{}/, \"{}\")".format(self.str_expr.expr(), self.regex, self.replace)

    def random_code(self, generator_state):
        child = self.str_expr.random_code(generator_state)
        opts = []
        tmp = generator_state.tmp("s")
        tmp_re = generator_state.tmp("re")
        
        the_replace = _escape_code_string(self.replace)
        
        # TODO: We do not generate any global replacements.
        
        opts.append(Code(child.decl,
                         child.prefix,
                         "({}).replace(/{}/, \"{}\")".format(child.value, self.regex, the_replace),
                         child.free_vars))
        opts.append(Code(child.decl,
                         child.prefix + "var {} = ({}).replace(/{}/, \"{}\");".format(tmp, child.value, self.regex, the_replace),
                         tmp,
                         child.free_vars))

        opts.append(Code(child.decl,
                         child.prefix + "var {} = new RegExp(\"{}\");".format(tmp_re, _escape_code_string(self.regex)),
                         "({}).replace({}, \"{}\")".format(child.value, tmp_re, the_replace),
                         child.free_vars))
        opts.append(Code(child.decl,
                         child.prefix + "var {} = new RegExp(\"{}\"); var {} = ({}).replace({}, \"{}\");".format(tmp_re, _escape_code_string(self.regex), tmp, child.value, tmp_re, the_replace),
                         tmp,
                         child.free_vars))

        return generator_state.random.choice(opts)


# Helper - Holds the state of the JS generation process.
class GeneratorState:
    def __init__(self, config={}, random_seed=None):
        self._idx = 0
        self._config = dict(config)
        self._top_level_fn = True
        # Config is expected to be set when this class is used in expressiongenerator.py.
        
        self.random = random.Random()
        self.random.seed(random_seed)
    
    def tmp(self, prefix="x"):
        """
        Returns the name of a fresh temporary variable to use.
        """
        self._idx += 1
        return "{}{}".format(prefix, self._idx)
    
    def config(self, key):
        """
        If 'key' is set in the config dict, returns its value, otherwise returns None.
        """
        if key in self._config:
            return self._config[key]
        else:
            return None
    
    def is_top_level_function(self):
        """
        Called by GenericFunction during the random_code recursion, and returns true only for the very first call. 
        """
        if self._top_level_fn:
            self._top_level_fn = False
            return True
        else:
            return False


# Helper - Represents a piece of code generated by random_code().
class Code:
    """
    Represents a piece of code generated by CodeGenerator.random_code().
    
    The code is split into three parts: declarations, which are prerequisites which should remain in global scope
    (such as function definitions), prefix, which is a snippet of JS code which must be executed before the expression
    this code returns can be evaluated, and value, a JS expression which represents the result of this code snippet.
    We also keep a list of the free variables (i.e. the inputs) used in the code snippets and expression. 
    
    The code in the declaration may not read or write any variables from free_vars. They are not guaranteed to be set
    yet. It is allowed to define a variable or function in decl which is used in prefix or value, as long as that name
    is not included in free_vars.
    
    This class is simply a convenient container to access these pieces during the random_code() recursion.
    """
    def __init__(self, declarations, prefix, value, free_vars):
        self.decl = declarations
        self.prefix = prefix
        self.value = value
        self.free_vars = set(free_vars) # A set of InputVariable objects
    
    def to_js(self, config, callback=None):
        if callback is None:
            value = self.value
        else:
            value = "{}({})".format(callback, self.value)
        input_block = self._generate_input_block(config)
        return clean_js_string(input_block + self.decl + self.prefix + value + ";")
    
    def _generate_input_block(self, config):
        bool_fn_template = config["input-function-name-template-bool"]
        int_fn_template = config["input-function-name-template-int"]
        str_fn_template = config["input-function-name-template-str"]
        
        input_lines = []
        for iv in sorted(self.free_vars):
            assert isinstance(iv, InputVariable)
            if iv.var_type == InputVariable.BOOL:
                input_fn_call = bool_fn_template.format(iv.orig_name)
            elif iv.var_type == InputVariable.INT:
                input_fn_call = int_fn_template.format(iv.orig_name)
            elif iv.var_type == InputVariable.STR:
                input_fn_call = str_fn_template.format(iv.orig_name)
            else:
                assert False # NOTREACHED
            input_lines.append("var {} = {};".format(iv.current_name, input_fn_call))
        
        return "\n".join(input_lines) + "\n\n"


# Helper - Represents an input variable in the generated code.
class InputVariable:
    """
    Represents an input variable passed around in Code.free_vars.
    
    orig_name is the name from the symbolic expression, which is used outside the final wrapping function to actually
    get the value of this variable from the environment.
    var_type is either BOOL, INT or STR, the type of the variable.
    current_name is the name used for tis variable in the current scope, which can change depending on which function
    the current code is in.
    
    The variable current_name in the generated code will always be an alias for the variable orig_name in the inputs.
    """
    BOOL = 0
    INT = 1
    STR = 2
    
    def __init__(self, orig_name, var_type, current_name):
        assert var_type in [self.BOOL, self.INT, self.STR]
        self.orig_name = str(orig_name)
        self.var_type = var_type
        self.current_name = str(current_name)
    
    def __eq__(self, other):
        return type(self) == type(other) and (self.orig_name, self.var_type, self.current_name) == (other.orig_name, other.var_type, other.current_name)
    def __hash__(self):
        return hash((self.orig_name, self.var_type, self.current_name))
    
    @staticmethod
    def merge_vars(*args):
        """
        Merges two (or more) sets of variables to remove aliases of the same input name being duplicated in different
        local variables. This is used any time in CodeGenerator.random_code() where the free variables of two child
        expressions are combined.
        
        Returns a pair (var_set, code)
        var_set is the new merged set of variables with duplicates removed.
        code is the string of JavaScript which can be executed to transform an environment like var_set into one like
        var_set_1 and var_set_2 including duplicates. This code needs to be prepended to the code using var_set_1 and
        var_set_2 so the names can be matched correctly.
        
        TODO: Example.
        """
        # Find groups of variables which have the same original name and type. These are duplicates.
        all_vars = set()
        for var_set in args:
            all_vars.update(var_set)
        
        groups = collections.defaultdict(set)
        for iv in all_vars:
            groups[(iv.orig_name, iv.var_type)].add(iv.current_name)
        
        deduplicated_vars = set()
        code_string = ""
        for orig_name, var_type in groups.keys():
            current_names = sorted(groups[(orig_name, var_type)])
            assert len(current_names) >= 1
            # In either case, we pass one var through unaffected.
            deduplicated_vars.add(InputVariable(orig_name, var_type, current_names[0]))
            # If there are multiple names, we choose one to be the representative and make all the others aliases.
            if len(current_names) > 1: 
                representative = current_names[0]
                aliases = current_names[1:]
                for alias_name in aliases:
                    code_string += "var {} = {}; ".format(alias_name, representative)
        
        return deduplicated_vars, code_string

# Helper - Escapes code which is to be passed to 'eval' and similar.
def _escape_code_string(code):
        code = code.replace("\\", "\\\\")
        code = code.replace("\"", "\\\"")
        return code


# Helper - Pretty-prints JavaScript code.
def clean_js_string(s):
    jsbeautify_opts = jsbeautifier.default_options()
    jsbeautify_opts.jslint_happy = True
    
    return jsbeautifier.beautify(s, jsbeautify_opts)


def _demo():
    jsgenerator_demo_config = {
        "input-function-name-template-bool": "artemisInputBoolean(\"{}\")",
        "input-function-name-template-int": "artemisInputInteger(\"{}\")",
        "input-function-name-template-str": "artemisInputString(\"{}\")",
    }
    
    expr = BooleanFunction(BooleanITE(BooleanBinaryOperation(BooleanBinaryOperation(StringInput("my_X"), Op.STRING_NEQ, StringConstant("Goodbye")), Op.BOOL_AND, BooleanBinaryOperation(StringInput("my_Y"), Op.STRING_EQ, StringConstant("Hello"))), BooleanBinaryOperation(StringInput("my_X"), Op.STRING_EQ, StringConstant("Hello")), BooleanBinaryOperation(StringInput("my_X"), Op.STRING_EQ, StringConstant("Goodbye"))))
    random_code = expr.random_code(GeneratorState())
    code_string = random_code.to_js(jsgenerator_demo_config)
    
    print "Fixed expression:"
    print expr.expr()
    print
    print "Randomly generated JS implementation:"
    print code_string
    

if __name__ == "__main__":
    _demo()
