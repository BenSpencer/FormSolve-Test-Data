# FormSolve Test Data

This repository contains a dataset of Web forms with
JavaScript validation code.
Subdirectories contain the following:

* [generator](generator/): generator for synthetic JavaScript code and
  synthetic form with validation constraints
    * See [generator/Readme.md](generator/Readme.md) and
  [generator/Readme-Forms.md](generator/Readme-Forms.md), respectively
* [synthetic-scripts](synthetic-scripts/): suite of 1000 synthetic
  standalone JavaScript programs
* [synthetic-forms](synthetic-forms/): suite of 1000 synthetic forms with
  validation constraints
* [jsfiddle](jsfiddle/): 18 example forms from
  [JSFiddle](https://jsfiddle.net/)
* [airlines](airlines/): 4 real-world frozen forms from airline websites


## Running FormSolve

To test the tool itself, follow the [ArtForm Readme](https://github.com/cs-au-dk/Artemis/blob/master/ArtForm.md) and use ``--major-mode concolic-reordering`` for the new FormSolve algorithm.
There is a small [set of test cases](https://github.com/cs-au-dk/Artemis/tree/master/artemis-code/tests/system/fixtures/concolic-reordering).
FormSolve is tested on Ubuntu 14.04.

