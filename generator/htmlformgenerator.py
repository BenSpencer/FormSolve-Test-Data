#!/usr/bin/env python
"""
Manages the templates and generation of HTML pages from a form specification.

This version uses plain HTML and pure JavaScript, with no frameworks or libraries.
In future it might be interesting to add some variety, e.g. a jQuery based implementation.

Call it with --html-only to get output suitable for going directly to a browser.
"""

import argparse
import xml.sax.saxutils

import formgenerator
import expressiongenerator

FIELD_HANDLER_ALERTS = True


def generate_html_from_spec(spec):
    
    validation_fns = []
    submit_validation_sections = []
    validation_registration = []
    field_html = []
    validation_rules = []
    for idx, (field, expr) in enumerate(zip(spec.skeleton.fields, spec.field_expressions), 1):
        # Generate the validation code.
        validation_fns.append(generate_validation_fn_for_field(idx, field, expr))
        # Generate the section of the main submit button validation which applies to this field.
        submit_validation_sections.append(generate_submit_validation_section_for_field(idx, field))
        # Generate the code to attach the validation handler.
        validation_registration.append(generate_validation_registration_for_field(idx, field))
        # Generate the HTML snippet.
        field_html.append(generate_html_for_field(idx, field))
        # Generate the HTML to show the validation rules at the bottom of the page.
        validation_rules.append(generate_validation_instructions(idx, field, expr))
    
    # Add these all into the template.
    validation_fns_string = "\n        \n".join(validation_fns)
    submit_validation_string = "\n        \n".join(submit_validation_sections)
    event_registration_string = "\n        \n".join(validation_registration)
    field_html_string = "\n        \n".join(field_html)
    validation_rules_string = "\n".join(validation_rules)
    
    return _HTML_FORM_TEMPLATE.format(validation_fns_string, submit_validation_string, event_registration_string, field_html_string, validation_rules_string)
    

def generate_html_for_field(idx, field):
    assert isinstance(field, formgenerator.FormField)
    
    if (field.field_type == formgenerator.FormField.TEXT) or (field.field_type == formgenerator.FormField.TEMPLATE_NON_EMPTY) or (field.field_type == formgenerator.FormField.TEMPLATE_POSITIVE_INT):
        return _TEXT_FIELD_HTML_TEMPLATE.format(field.name, idx, field.name, field.name)
        
    elif (field.field_type == formgenerator.FormField.CHECKBOX) or (field.field_type == formgenerator.FormField.TEMPLATE_MUST_CHECK):
        return _CHECKBOX_FIELD_HTML_TEMPLATE.format(field.name, idx, field.name, field.name)
        
    elif (field.field_type == formgenerator.FormField.RADIO_GROUP) or (field.field_type == formgenerator.FormField.TEMPLATE_RADIO_SELECT_ANY):
        button_html = []
        for opt_idx, opt_val in enumerate(field.options, 1):
            choice_name = "{}-{}".format(field.name, opt_idx)
            button_html.append(_RADIO_BUTTON_CHOICE_HTML_TEMPLATE.format(choice_name, field.name, opt_val, choice_name, opt_val))
        
        return _FIELDSET_HTML_TEMPLATE.format(field.name, idx, "\n".join(button_html))
        
    elif (field.field_type == formgenerator.FormField.SELECT) or (field.field_type == formgenerator.FormField.TEMPLATE_SELECT_NON_DEFAULT):
        options_html = [_SELECT_OPTION_HTML_TEMPLATE.format(opt, opt) for opt in field.options]
        return _SELECT_FIELD_HTML_TEMPLATE.format(field.name, idx, field.name, "\n".join(options_html))
        
    elif (field.field_type == formgenerator.FormField.TEMPLATE_NON_EQUAL) or (field.field_type == formgenerator.FormField.TEMPLATE_MIN_MAX):
        # This is two text fields grouped together
        name1 = "{}-1".format(field.name)
        name2 = "{}-2".format(field.name)
        field_html_1 = _TEXT_FIELD_BARE_HTML_TEMPLATE.format(name1, name1)
        field_html_2 = _TEXT_FIELD_BARE_HTML_TEMPLATE.format(name2, name2)
        return _FIELDSET_HTML_TEMPLATE.format(field.name, idx, "\n".join([field_html_1, field_html_2]))
        
    else:
        assert False # NOT REACHED: Unexpected field type encountered.
    

_TEXT_FIELD_HTML_TEMPLATE = """        <label for="{}" >Input {}:</label>
        <input type="text" id="{}" name="{}" >
        <br><br>"""

_CHECKBOX_FIELD_HTML_TEMPLATE = """        <label for="{}" >Input {}:</label>
        <input type="checkbox" id="{}" name="{}" >
        <br><br>"""

_FIELDSET_HTML_TEMPLATE = """        <fieldset id="{}-container" >
            <legend>Input {}</legend>
{}
        </fieldset>
        <br>"""

_RADIO_BUTTON_CHOICE_HTML_TEMPLATE = """            <input type="radio" id="{}" name="{}" value="{}" >
            <label for="{}" >{}</label><br>"""

_SELECT_FIELD_HTML_TEMPLATE = """        <label for="{}" >Input {}:</label>
        <select id="{}" >
{}
        </select>
        <br><br>"""

_SELECT_OPTION_HTML_TEMPLATE = """            <option value="{}" >{}</option>"""

_TEXT_FIELD_BARE_HTML_TEMPLATE = """            <input type="text" id="{}" name="{}" >"""


def generate_validation_fn_for_field(idx, field, expr):
    assert isinstance(field, formgenerator.FormField)
    assert isinstance(expr, expressiongenerator.GeneratedExpression)
    
    # We set up the input and callback properties in such a way that the generated code will work in our page.
    # The input function templates are already set in formgenerator.FormSpecification._generate_field_expression().
    callback = "return " # Trailing space is intended as jsgenerator.Code adds parentheses.
    js_str = expr.to_js(callback=callback)
    
    # Add some indentation to make it fit in.
    js_str = js_str.replace("\n", "\n            ")
    
    # Add it to the wrapping template.
    marked_elem = "{}-container".format(field.name) if field.field_type in formgenerator.FormField.FORM_FIELD_TYPES_WITH_GROUPS else field.name
    optional_alert = "\n                alert(\"Error at {}\");".format(field.name) if FIELD_HANDLER_ALERTS else ""
    return _VALIDATION_FUNCTION_TEMPLATE.format(idx, js_str, idx, idx, marked_elem, field.name, marked_elem, field.name, optional_alert)
    

# Validate methods return true/false.
# Process methods mark the field as valid/invalid, and record this in the global state.
_VALIDATION_FUNCTION_TEMPLATE = """        function validate_{}() {{
            {}
        }}
        function process_{}() {{
            if (validate_{}()) {{
                mark_valid("{}");
                valid["{}"] = true;
                return true;
            }} else {{
                mark_invalid("{}");
                valid["{}"] = false;{}
                return false;
            }}
        }}"""


def generate_submit_validation_section_for_field(idx, field,):
    assert isinstance(field, formgenerator.FormField)
    
    return _SUBMIT_VALIDATION_SECTION_TEMPLATE.format(idx, field.name)

_SUBMIT_VALIDATION_SECTION_TEMPLATE = """            process_{}();
            all_valid = all_valid && valid["{}"];"""

def generate_validation_registration_for_field(idx, field):
    assert isinstance(field, formgenerator.FormField)
    
    # Some input types are really groups of several inputs, so we treat them a bit differently.
    if field.field_type in formgenerator.FormField.FORM_FIELD_TYPES_WITH_GROUPS:
        if (field.field_type == formgenerator.FormField.RADIO_GROUP) or (field.field_type == formgenerator.FormField.TEMPLATE_RADIO_SELECT_ANY):
            button_strings = []
            for opt_idx, opt_val in enumerate(field.options, 1):
                var_name = "i{}_{}".format(idx, opt_idx)
                opt_id = "{}-{}".format(field.name, opt_idx)
                button_strings.append(_EVENT_REGISTRATION_TEMPLATE.format(var_name, opt_id, var_name, idx))
            return "\n".join(button_strings)
        elif (field.field_type == formgenerator.FormField.TEMPLATE_NON_EQUAL) or (field.field_type == formgenerator.FormField.TEMPLATE_MIN_MAX):
            var1 = "i{}_1".format(idx)
            var2 = "i{}_2".format(idx)
            field1 = "{}-1".format(field.name)
            field2 = "{}-2".format(field.name) 
            return "\n".join([_EVENT_REGISTRATION_TEMPLATE.format(var1, field1, var1, idx), _EVENT_REGISTRATION_TEMPLATE.format(var2, field2, var2, idx)])
        else:
            assert False # NOT REACHED: Unexpected field type encountered.
    else:
        var_name = "i{}".format(idx)
        return _EVENT_REGISTRATION_TEMPLATE.format(var_name, field.name, var_name, idx)

_EVENT_REGISTRATION_TEMPLATE = """            var {} = document.getElementById("{}");
            {}.addEventListener("change", process_{});"""

def generate_validation_instructions(idx, field, expr):
    assert isinstance(expr, expressiongenerator.GeneratedExpression)
    
    expr_string = xml.sax.saxutils.escape(expr.to_expr())
    
    if field.field_type in formgenerator.FormField.FORM_FIELD_TEMPLATE_TYPES:
        comment = "({}) ".format(field.type_name())
    else:
        comment = ""
    
    return _VALIDATION_INSTRUCTIONS_ITEM_TEMPLATE.format(idx, comment, expr_string)

_VALIDATION_INSTRUCTIONS_ITEM_TEMPLATE = """        <li>Input {}: {}<span class="expr" >{}</span></li>"""




_HTML_FORM_TEMPLATE = """<!doctype HTML>
<html>
<head>
    <title>Randomly generated test form</title>
    <style type="text/css" >
        *
        {{
            font-family: sans-serif;
        }}
        .expr
        {{
            font-family: monospace;
        }}
        .valid
        {{
            outline: 3px solid green;
        }}
        .invalid
        {{
            outline: 3px solid red;
        }}
    </style>
    <script type="text/javascript" >
        function mark_valid(id) {{
            var x = document.getElementById(id);
            x.classList.remove("invalid");
            x.classList.add("valid");
        }}
        function mark_invalid(id) {{
            var x = document.getElementById(id);
            x.classList.remove("valid");
            x.classList.add("invalid");
        }}
        // Global state
        var valid = {{}};
        
{}
        
        function validate_submit(e) {{
            // Check each field has been validated successfully.
            all_valid = true;
            
{}
            
            if (!all_valid) {{
                e.preventDefault();
                alert("Error. Some fields are not yet valid.");
            }}
        }}
        
        window.addEventListener("load", function() {{
{}
            
            var btn = document.getElementById("submit-btn");
            btn.addEventListener("click", validate_submit);
            // TODO: Maybe also add this to form/onsubmit?
            
        }}, false);
    </script>
</head>
<body>
    <h1>Randomly generated test form</h1>
    <form action="about:blank" method="GET" >
{}
        
        <input type="submit" value="Submit" id="submit-btn" >
    </form>
    
    <hr>
    <p>Cheat-sheet of validation rules:</p>
    <ul>
{}
    </ul>
</body>
</html>
"""









def _demo():
    ap = argparse.ArgumentParser(description="Randomly generate an HTML form with JavaScript validation.")
    ap.add_argument("--html-only", action="store_true",
                    help="Only print the generated HTML page, without any explanation. This output is suitable for being given directly to a browser.")
    args = ap.parse_args()
    
    fs = formgenerator.FormSpecification()
    
    if not args.html_only:
        # Show a proper demo (the default)
        print "Form skeleton:"
        print fs.skeleton.printable_str(indent=4)
        print
        for idx, field_expr in enumerate(fs.field_expressions, 1):
            print "Field {} expression:".format(idx)
            print field_expr.to_expr()
            print
        print "HTML page:"
    
    html_string = generate_html_from_spec(fs)
    print html_string


if __name__ == "__main__":
    _demo()
