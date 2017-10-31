#!/usr/bin/env python
"""
A generator of JavaScript functions

This script uses expressiongenerator.py to generate a directory full of example randomly-generated JS snippets.
"""

import datetime
import os
import math
import subprocess
import sys
import time
import argparse
import csv
import collections
import inspect

import expressiongenerator

GENERATION_FILE = "generation.txt"
FILE_LIST_FILE = "file_list.txt"
PARSE_TREE_INFO_FILE = "parse-tree-info.csv"
JS_VALIDATION_EXE = "esvalidate" # It is installed in $PATH.
INVALID_EXAMPLES_FILE = "invalid_files.txt"


def generate_examples(samples_to_generate):
    start_time = time.time()
    
    # Create a fresh directory for the generated files
    timestamp = datetime.datetime.now()
    dir_name = "generated-js_{}".format(timestamp.strftime("%Y-%m-%d_%H-%M-%S"))
    os.mkdir(dir_name)
    
    # Number formatting
    num_len = int(math.floor(math.log10(samples_to_generate)) + 1)
    
    # Confirm the validity checker exists
    validity_checker = js_validity_checker_version() # Version string or None.
    
    # Save some meta info
    with open(os.path.join(dir_name, GENERATION_FILE), 'w') as f:
        f.write("Auto-generated example JavaScript programs.\n")
        f.write("Date: {}\n".format(timestamp.strftime("%Y-%m-%d %H-%M-%S")))
        f.write("Commit: {}\n".format(get_git_commit()))
        f.write("Random seed: {}\n".format(hash(timestamp)))
        f.write("JS validator: {}\n".format(validity_checker))
    
    # Generate some sample files
    file_list = []
    parse_tree_log = []
    invalid_examples = []
    cfg = expressiongenerator.ExpressionCFG(random_seed=hash(timestamp))
    for idx in range(1, samples_to_generate+1):
        sys.stdout.write("Generating example: {:{}d} / {}\r".format(idx, num_len, samples_to_generate))
        sys.stdout.flush()
        
        # Generate expression and code
        expr = cfg.generate_expr()
        if expr is None:
            continue # CFG search did not find a good string in time
        
        expr_string = expr.to_expr()
        js_string = expr.to_js()
        file_string = "// {}\n\n{}\n".format(expr_string, js_string)
        
        # TODO: Is it possible to also generate and save some expected stats, e.g. the expected number of branches?
        
        # Save them into a file
        sample_file = "sample_{:0{}d}.js".format(idx, num_len)
        file_list.append(sample_file)
        
        with open(os.path.join(dir_name, sample_file), 'w') as f:
            f.write(file_string)
        
        # Save the parse tree data as well
        counts = parse_tree_counts(expr.parse_tree)
        counts["example"] = sample_file[:-3]
        parse_tree_log.append(counts)
        
        # Check the validity of the generated JS
        if validity_checker is not None and not check_validity(os.path.join(dir_name, sample_file)):
            invalid_examples.append(sample_file)
    
    # Save the file list
    with open(os.path.join(dir_name, FILE_LIST_FILE), 'w') as f:
        f.writelines(["{}\n".format(fn) for fn in file_list])
    
    # Save the invalid file list
    if validity_checker is not None and invalid_examples:
        with open(os.path.join(dir_name, INVALID_EXAMPLES_FILE), 'w') as f:
            f.writelines(["{}\n".format(fn) for fn in invalid_examples])
    
    # Save timing info
    duration = time.time() - start_time
    mins, secs = divmod(duration, 60)
    duration_str = "{:02d}:{:06.3f}".format(int(mins), secs)
    
    # Save some more meta info
    with open(os.path.join(dir_name, GENERATION_FILE), 'a') as f:
        if len(file_list) == samples_to_generate:
            f.write("Samples: {}\n".format(samples_to_generate))
        else:
            f.write("Samples: {} (attempted {})\n".format(len(file_list), samples_to_generate))
        if validity_checker is not None:
            f.write("Valid samples: {} / {}\n".format(len(file_list)-len(invalid_examples), len(file_list)))
        f.write("Time: {}\n".format(duration_str))
    
    # Save the parse tree log
    all_keys = set(sum([x.keys() for x in parse_tree_log], []))
    all_keys.remove("example")
    keys_row = ["example"] + sorted(all_keys)
    
    with open(os.path.join(dir_name, PARSE_TREE_INFO_FILE), 'w') as f:
        dw = csv.DictWriter(f, keys_row)
        dw.writeheader()
        dw.writerows(parse_tree_log)
    
    # Done
    print "\nDone [{}]".format(duration_str) 


def get_git_commit():
    """Returns a human readable string representing the current git commit."""
    try:
        subprocess.check_call(["git", "diff-index", "--quiet", "HEAD", "--"])
        git_dirty = ""
    except subprocess.CalledProcessError:
        git_dirty = "(dirty) "
    try:
        git_commit = subprocess.check_output(["git", "show", "--no-patch", "--format=%h {}- %s".format(git_dirty)])
    except subprocess.CalledProcessError:
        git_commit = "(?)"
    return git_commit.strip()


def parse_tree_counts(parse_tree):
    """Given a parse tree, count the different types of node it contains."""
    
    def islist(xs):
        return isinstance(xs, collections.Iterable) and not isinstance(xs, basestring)
    
    if islist(parse_tree):
        # Then sum the counts of all the elements.
        child_counts = map(parse_tree_counts, parse_tree)
        counts = {}
        for cc in child_counts:
            for k, v in cc.items():
                counts[k] = counts.get(k, 0) + v
        
    elif inspect.isclass(parse_tree):
        # Then count by its name
        counts = {parse_tree.__name__: 1}
        
    #elif callable(parse_tree):
    #    # Then count by its name
    #    counts = {parse_tree.__name__: 1}
    #    
    else:
        # Ignore
        #counts = {str(parse_tree): 1}
        counts = {}
    
    return counts


def js_validity_checker_version():
    """Checks that JS_VALIDATION_EXE is installed and working, and returns the version."""
    cmd = [JS_VALIDATION_EXE, "--version"]
    try:
        stdout = subprocess.check_output(cmd, stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError:
        return None
    return stdout.strip()

def check_validity(js_file_name):
    """Given a JavaScript source file, return whether or not this file is valid JavaScript."""
    cmd = [JS_VALIDATION_EXE, js_file_name]
    try:
        with open(os.devnull) as void:
            subprocess.check_call(cmd, stdout=void, stderr=void)
    except subprocess.CalledProcessError:
        return False
    return True # Call returned 0.


def main():
    ap = argparse.ArgumentParser(description='Generate a directory of randomly-generated JavaScript programs.')
    ap.add_argument('N', action='store', nargs='?', default=20, type=int, help='The number of examples to generate.')
    args = ap.parse_args()
    
    generate_examples(args.N)

if __name__ == "__main__":
    main()
