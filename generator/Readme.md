# Standalone JavaScript Tests

This repository contains a generator for some synthetic examples to test
the bytecode-based approach to concolic testing of Web JavaScript
vs. other approaches.

## Approach

We have a CFG defining symbolic expressions. We can sample strings at
random from the CFG to generate random expressions. 
Each symbol in the expression language can be translated to a
JavaScript snippet which implements it (usually in several different
ways). 
So once we have a randomly generated expression, we can use this to randomly generate a JavaScript program which implements it.

Run `generator/expressiongenerator.py` for a demo of this process.

The `generator/main.py` script generates a directory of randomly
generated JavaScript programs
 which can be used as test inputs  It takes an optional argument to specify the 
number of examples to generate (default: 20).

## Running the experiments

1. Configure the features to be included.
 

2. Generate a directory of examples.

        $ ./generator/main.py 100

    * This creates `generated-js_2017-10-05_14-51-31/` containing a suite of JavaScript files.


