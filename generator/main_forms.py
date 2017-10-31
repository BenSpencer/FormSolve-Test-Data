#!/usr/bin/env python
"""
A generator of HTML forms with JavaScript validation rules

This script uses formgenerator.py and htmlformgenerator.py to generate a directory full of example randomly-generated HTML pages.
"""

import time
import datetime
import os
import math
import sys
import argparse
import random

from main import get_git_commit
import formgenerator
import htmlformgenerator

GENERATION_FILE = "generation.txt"
FILE_LIST_FILE = "file_list.txt"


def generate_form_examples(samples_to_generate):
    start_time = time.time()
    
    # Create a fresh directory for the generated files
    timestamp = datetime.datetime.now()
    dir_name = "generated-forms_{}".format(timestamp.strftime("%Y-%m-%d_%H-%M-%S"))
    os.mkdir(dir_name)
    
    # Randomness
    random_source = random.Random()
    random_source.seed(hash(timestamp))
    
    # Number formatting
    num_len = int(math.floor(math.log10(samples_to_generate)) + 1)
    
    # Save some meta info
    with open(os.path.join(dir_name, GENERATION_FILE), 'w') as f:
        f.write("Auto-generated example HTML forms.\n")
        f.write("Date: {}\n".format(timestamp.strftime("%Y-%m-%d %H-%M-%S")))
        f.write("Commit: {}\n".format(get_git_commit()))
        f.write("Random seed: {}\n".format(hash(timestamp)))
        f.write("Samples: {}\n".format(samples_to_generate))
    
    # Generate some sample files
    file_list = []
    for idx in range(1, samples_to_generate + 1):
        sys.stdout.write("Generating example: {:{}d} / {}\r".format(idx, num_len, samples_to_generate))
        sys.stdout.flush()
        
        # Generate form specification and HTML
        form_spec = formgenerator.FormSpecification(config=None, random_seed=random_source.getrandbits(32))
        form_html = htmlformgenerator.generate_html_from_spec(form_spec)
        
        # TODO: Is it possible to also generate and save some expected stats, e.g. the expected number of branches, an example of a valid filling, etc.?
        
        # Save them into a file
        sample_file = "form_{:0{}d}.html".format(idx, num_len)
        file_list.append(sample_file)
        
        with open(os.path.join(dir_name, sample_file), 'w') as f:
            f.write(form_html)
    
    # Save the file list
    with open(os.path.join(dir_name, FILE_LIST_FILE), 'w') as f:
        f.writelines(["{}\n".format(fn) for fn in file_list])
    
    # Save timing info
    duration = time.time() - start_time
    mins, secs = divmod(duration, 60)
    duration_str = "{:02d}:{:06.3f}".format(int(mins), secs)
    with open(os.path.join(dir_name, GENERATION_FILE), 'a') as f:
        f.write("Time: {}\n".format(duration_str))
    
    # Done
    print "\nDone [{}]".format(duration_str)
    



def main():
    ap = argparse.ArgumentParser(description='Generate a directory of randomly-generated HTML forms.')
    ap.add_argument('N', action='store', nargs='?', default=20, type=int, help='The number of examples to generate.')
    args = ap.parse_args()
    
    generate_form_examples(args.N)

if __name__ == "__main__":
    main()
