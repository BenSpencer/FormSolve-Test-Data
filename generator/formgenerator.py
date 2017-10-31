#!/usr/bin/env python
"""
Tools for randomly generating forms specifications, including their corresponding validation rules.
"""

import random
import numpy.random

import cfghelpers
import expressiongenerator
import jsgenerator


class FormField:
    TEXT = 1
    CHECKBOX = 2
    RADIO_GROUP = 3
    SELECT = 4
    TEMPLATE_NON_EMPTY = 101
    TEMPLATE_NON_EQUAL = 102
    TEMPLATE_MUST_CHECK = 103
    TEMPLATE_MIN_MAX = 104
    TEMPLATE_POSITIVE_INT = 105
    TEMPLATE_SELECT_NON_DEFAULT = 106
    TEMPLATE_RADIO_SELECT_ANY = 107
    
    FORM_FIELD_TYPES = (TEXT, CHECKBOX, RADIO_GROUP, SELECT)
    FORM_FIELD_TYPES_WITH_OPTIONS = (RADIO_GROUP, SELECT, TEMPLATE_SELECT_NON_DEFAULT, TEMPLATE_RADIO_SELECT_ANY)
    FORM_FIELD_TEMPLATE_TYPES = (TEMPLATE_NON_EMPTY, TEMPLATE_NON_EQUAL, TEMPLATE_MUST_CHECK, TEMPLATE_MIN_MAX, TEMPLATE_POSITIVE_INT, TEMPLATE_SELECT_NON_DEFAULT, TEMPLATE_RADIO_SELECT_ANY)
    FORM_FIELD_TYPES_WITH_GROUPS = (RADIO_GROUP, TEMPLATE_NON_EQUAL, TEMPLATE_MIN_MAX, TEMPLATE_RADIO_SELECT_ANY)
    
    def __init__(self, field_type, name, options=None):
        assert (field_type in self.FORM_FIELD_TYPES) or (field_type in self.FORM_FIELD_TEMPLATE_TYPES)
        assert bool(options is not None) == bool(field_type in self.FORM_FIELD_TYPES_WITH_OPTIONS)
        self.field_type = field_type
        self.name = str(name)
        self.options = options
    
    def type_name(self):
        names = {
            self.TEXT: "text",
            self.CHECKBOX: "checkbox",
            self.RADIO_GROUP: "radio group",
            self.SELECT: "select",
            self.TEMPLATE_NON_EMPTY: "[template] non-empty field",
            self.TEMPLATE_NON_EQUAL: "[template] non-equal fields",
            self.TEMPLATE_MUST_CHECK: "[template] mandatory checkbox",
            self.TEMPLATE_MIN_MAX: "[temapte] min/max fields",
            self.TEMPLATE_POSITIVE_INT: "[template] positive int",
            self.TEMPLATE_SELECT_NON_DEFAULT: "[temapte] select non-default",
            self.TEMPLATE_RADIO_SELECT_ANY: "[temapte] select any radio button"
        }
        return names[self.field_type]
    
    def __str__(self):
        if self.options is None:
            return "type: {}, name: {}".format(self.type_name(), self.name)
        else:
            return "type: {}, name: {}, options: {}".format(self.type_name(), self.name, ", ".join(map(str, self.options)))


class FormSkeleton:
    def __init__(self, fields):
        for f in fields:
            assert isinstance(f, FormField)
        self.fields = fields
    
    def __str__(self):
        return "FormSkeleton: [" + "], [".join(map(str, self.fields)) + "]"
    
    def printable_str(self, indent=0):
        indent_str = " " * indent
        lines = ["{} fields:".format(len(self.fields))] + ["Field {}: {}".format(idx, f) for idx, f in enumerate(self.fields, 1)]
        return  ("\n" + indent_str).join(lines)


class FormSpecification:
    DEFAULT_CONFIG = {
        "form_skeleton_min_fields": 2,
        "form_skeleton_max_fields": 8,
        "form_skeleton_type_weights": {
            FormField.TEXT: 3,
            FormField.CHECKBOX: 1,
            FormField.RADIO_GROUP: 1,
            FormField.SELECT: 1,
            FormField.TEMPLATE_NON_EMPTY: 1,
            FormField.TEMPLATE_NON_EQUAL: 1,
            FormField.TEMPLATE_MUST_CHECK: 1,
            FormField.TEMPLATE_MIN_MAX: 1,
            FormField.TEMPLATE_POSITIVE_INT: 1,
            FormField.TEMPLATE_SELECT_NON_DEFAULT: 1,
            FormField.TEMPLATE_RADIO_SELECT_ANY: 1
        },
        "form_field_min_options": 2,
        "form_field_max_options": 7,
        
        "field_expression_approx_length": 10,
        "field_expression_length_dev": 5,
    }
    
    def __init__(self, config=None, random_seed=None):
        self.config = self.DEFAULT_CONFIG
        if config is not None:
            self.config.update(config)
        
        # Set up a repeatable source of randomness for this generation.
        self._random = random.Random()
        if random_seed is not None:
            self._random.seed(hash(random_seed))
        # NumPy requires the seed to be an integer in the range 0 to 2**32-1
        numpy_seed = random_seed % (2 ** 32) if random_seed is not None else None
        self._np_random = numpy.random.RandomState(numpy_seed)
        
        # Generate the skeleton of the form.
        self.skeleton = self._generate_form_skeleton()
        
        # For each field, generate a validation expression.
        # N.B. These expressions are customised to the field they are attached to.
        self.field_expressions = []
        for f in self.skeleton.fields:
            if f.field_type in FormField.FORM_FIELD_TEMPLATE_TYPES:
                self.field_expressions.append(self._generate_field_expression_for_template(f))
            else:
                self.field_expressions.append(self._generate_field_expression(f))
    
    def _generate_form_skeleton(self):
        """
        Returns a randomly generated skeleton of the HTML form.
        
        This includes the number and types of all the fields, and their names.
        """
        # For now, I don't see the need for this to be a CFG. We can just choose a set of field types.
        # A CFG might be more useful if we start trying to add more sophisticated interfaces such as tabbed, multi-page
        # or hierarchical forms.
        
        # Choose the number of fields.
        num_fields = self._random.randint(self.config["form_skeleton_min_fields"], self.config["form_skeleton_max_fields"])
        
        fields = []
        field_types = FormField.FORM_FIELD_TYPES + FormField.FORM_FIELD_TEMPLATE_TYPES
        field_type_probs = cfghelpers.to_prob_dist([self.config["form_skeleton_type_weights"].get(t, 1) for t in field_types])
        for idx in range(1, num_fields+1):
            # Choose a field type, according to the weights.
            field_type = self._np_random.choice(field_types, p=field_type_probs)
            
            # Choose a name.
            field_name = "input-{}".format(idx)
            
            # If necessary (by type), choose some options
            options = self._generate_options() if field_type in FormField.FORM_FIELD_TYPES_WITH_OPTIONS else None
            
            fields.append(FormField(field_type, field_name, options))
        
        return FormSkeleton(fields)
    
    def _generate_options(self):
        """
        Returns a random list of options for a select box or radio button group. 
        """
        num_options = self._random.randint(self.config["form_field_min_options"], self.config["form_field_max_options"])
        opts = set()
        for _ in range(num_options):
            opts.add(self._generate_string_constant_value())
        return list(opts)
    
    def _generate_string_constant_value(self):
        """
        Generates a single string constant.
        """
        # TODO: This is duplicated from ExpressionCFG._generate_string_constant_value
        length = self._random.randint(1, 5)
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        return "".join(self._random.sample(alphabet, length))
    
    def _all_field_names(self):
        # Grab the names for each field type, confirming that we have no fields of unexpected type.
        bool_field_names = []
        int_field_names = []
        str_field_names = []
        for f in self.skeleton.fields:
            if f.field_type == FormField.TEXT:
                str_field_names.append(f.name)
            elif f.field_type == FormField.SELECT:
                str_field_names.append(f.name)
                int_field_names.append(f.name)
            elif f.field_type == FormField.CHECKBOX:
                bool_field_names.append(f.name)
            elif f.field_type == FormField.RADIO_GROUP:
                # For radio groups, we have multiple boolean fields in the group.
                bool_field_names.extend(["{}-{}".format(f.name, idx) for idx in range(1, len(f.options) + 1)])
            else:
                # Generated expressions may only refer to generated fields - the template based fields are totally disjoint.
                assert f.field_type in FormField.FORM_FIELD_TEMPLATE_TYPES  # NOT REACHED: Unexpected field type encountered.
        
        return bool_field_names, int_field_names, str_field_names
    
    def _generate_field_expression(self, field):
        """
        Generate a single field validation expression (of type expressiongenerator.GeneratedExpression).
        
        This expression is generated by expressiongenerator.
        It is required to include the target field as an input in at least one place.
        It may optionally include other inputs.
        """
        bool_field_names, int_field_names, str_field_names = self._all_field_names()
        
        names_to_include = ["{}-{}".format(field.name, idx) for idx in range(1, len(field.options) + 1)] if field.field_type == FormField.RADIO_GROUP else [field.name]
        
        expression_config = {
            "must-include-input": names_to_include,
            "boolean-expressions-only": True,
            
            # If any of these lists are empty, then a field of that type can't be generated.
            "input-names-bool": bool_field_names,
            "input-names-int": int_field_names,
            "input-names-str": str_field_names,
            
            "cfg-search-approx-length": self.config["field_expression_approx_length"],
            "cfg-search-length-dev": self.config["field_expression_length_dev"],
            "cfg-disallow-constant-expressions": False, # Give some more freedom in the generation
            
            # These are needed by htmlformgenerator.generate_validation_fn_for_field().
            "generate-inputs-directly": True,
            "input-function-name-template-bool": "document.getElementById(\"{}\").checked",
            "input-function-name-template-int": "document.getElementById(\"{}\").selectedIndex",
            "input-function-name-template-str": "document.getElementById(\"{}\").value",
            
            # TODO: There seem to be some bugs still in some of the generated eval code (maybe relating to nested evals?).
            "allow-eval": False,
        }
        
        # TODO: Configure whether the input from this field must be included.
        # TODO: Configure whether we allow the expressions to include any other inputs or not.
        
        cfg = expressiongenerator.ExpressionCFG(expression_config, random_seed=int(self._random.getrandbits(32)))
        return cfg.generate_expr()
    
    def _generate_field_expression_for_template(self, field):
        assert field.field_type in FormField.FORM_FIELD_TEMPLATE_TYPES
        # These are hard-coded expressions for the validation of each of the template types.
        if field.field_type == FormField.TEMPLATE_NON_EMPTY:
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.StringInput(field.name), jsgenerator.Op.STRING_NEQ, jsgenerator.StringConstant(""))
            
        elif field.field_type == FormField.TEMPLATE_NON_EQUAL:
            name1 = "{}-1".format(field.name)
            name2 = "{}-2".format(field.name)
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.StringInput(name1), jsgenerator.Op.STRING_NEQ, jsgenerator.StringInput(name2))
            
        elif field.field_type == FormField.TEMPLATE_MUST_CHECK:
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.BooleanInput(field.name), jsgenerator.Op.BOOL_EQ, jsgenerator.BooleanConstant(True))
            
        elif field.field_type == FormField.TEMPLATE_MIN_MAX:
            name1 = "{}-1".format(field.name)
            name2 = "{}-2".format(field.name)
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.StrToInt(jsgenerator.StringInput(name1)), jsgenerator.Op.INT_LEQ, jsgenerator.StrToInt(jsgenerator.StringInput(name2)))
            
        elif field.field_type == FormField.TEMPLATE_POSITIVE_INT:
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.StrToInt(jsgenerator.StringInput(field.name)), jsgenerator.Op.INT_GT, jsgenerator.IntegerConstant(0))
            
        elif field.field_type == FormField.TEMPLATE_SELECT_NON_DEFAULT:
            assert len(field.options) > 0
            default_value = field.options[0]
            expr = jsgenerator.BooleanBinaryOperation(jsgenerator.StringInput(field.name), jsgenerator.Op.STRING_NEQ, jsgenerator.StringConstant(default_value)) 
            
        elif field.field_type == FormField.TEMPLATE_RADIO_SELECT_ANY:
            assert len(field.options) > 0
            
            # We process the list backwards to build the structure (a1 OR (a2 OR a3)) from the inside out.
            
            button_name = "{}-{}".format(field.name, len(field.options))
            expr = jsgenerator.BooleanInput(button_name)
            
            for button_idx in range(len(field.options)-1, 0, -1):
                button_name = "{}-{}".format(field.name, button_idx)
                expr = jsgenerator.BooleanBinaryOperation(expr, jsgenerator.Op.BOOL_OR, jsgenerator.BooleanInput(button_name))
            
            expr = jsgenerator.BooleanBinaryOperation(expr, jsgenerator.Op.BOOL_EQ, jsgenerator.BooleanConstant(True))
            
        else:
            assert False # NOT REACHED: Unexpected field template type encountered.
        
        expression_config = {
            # These are needed by htmlformgenerator.generate_validation_fn_for_field().
            "generate-inputs-directly": True,
            "input-function-name-template-bool": "document.getElementById(\"{}\").checked",
            "input-function-name-template-int": "document.getElementById(\"{}\").selectedIndex",
            "input-function-name-template-str": "document.getElementById(\"{}\").value",
        }
        
        return expressiongenerator.GeneratedExpression(None, expr, expression_config, self._random.getrandbits(32))
    



def _demo():
    fs = FormSpecification()
    
    print "Form skeleton:"
    print fs.skeleton.printable_str(indent=4)
    print
    for idx, field_expr in enumerate(fs.field_expressions, 1):
        print "Field {} expression:".format(idx)
        print field_expr.to_expr()
        print
    


if __name__ == "__main__":
    _demo()
