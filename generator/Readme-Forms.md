# Automatic form generation

This describes scripts for generating synthetic form validation examples.

[Main Readme](Readme.md)

## Approach

The test pages are generated as follows:

* Create a *form specification*. This consists of:

	* A *form skeleton*; a list of the form fields and their types.
	* A  list of the corresponding expressions which will be used to validate each field.

* Translate this skeleton to an HTML page which implements the specification - displaying the form fields and using JavaScript to enforce the validation rules.


The possible form field types are: text inputs, checkboxes, radio button groups, and select boxes. The possible values for select boxes and radio button groups are randomly generated strings.


*Currently, the field types and validation expressions are completely random, so the generated forms are very unnatural.*
*In future, we would like to use a more template-based approach, so that some common real-world patterns can be included in the generated forms as well.*


## Demos

* To see a demo of the form skeleton and validation rule generation:

	```
	$ ./generator/formgenerator.py
	```

* To generate a single test form:

	```
	$ ./generator/htmlformgenerator.py --html-only > test.html
	```

	This uses the form skeleton generator above, and HTML templates to render each form field. The JavaScript generator from ``expressiongenerator.py``/``jsgenerator.py`` is used to generate code for the validation rules.


## Running experiments

* To generate a directory of test forms to be used for the evaluation:

    ```
    $ ./generator/main_forms.py 100
    ```
    
    This generates `generated-forms_2017-09-28_16-36-53/`.

* 