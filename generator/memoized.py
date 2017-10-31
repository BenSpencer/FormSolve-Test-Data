#!/usr/bin/env python
"""
A decorator which memoizes a function call, speeding up re-evaluation on the same arguments.

Taken from: https://wiki.python.org/moin/PythonDecoratorLibrary#Memoize

# N.B. In Python 3.2 on we could use functools.lru_cache instead, but for Python 2 we need to implement it directly.
"""

import collections
import functools

class memoized(object):
    '''Decorator. Caches a function's return value each time it is called.
    If called later with the same arguments, the cached value is returned
    (not reevaluated).
    '''
    def __init__(self, func):
        self.func = func
        self.cache = {}
    def __call__(self, *args):
        if not isinstance(args, collections.Hashable):
            # uncacheable. a list, for instance.
            # better to not cache than blow up.
            return self.func(*args)
        if args in self.cache:
            return self.cache[args]
        else:
            value = self.func(*args)
            self.cache[args] = value
            return value
    def __repr__(self):
        '''Return the function's docstring.'''
        return self.func.__doc__
    def __get__(self, obj, objtype):
        '''Support instance methods.'''
        return functools.partial(self.__call__, obj)


if __name__ == "__main__":
    fib_code = """
def fibonacci(n):
    "Return the nth fibonacci number."
    if n in (0, 1):
        return n
    return fibonacci(n-1) + fibonacci(n-2)
"""
    
    import timeit
    
    print "Calculating fib(32):"
    print timeit.timeit("print fibonacci(32)", number=1, setup=fib_code)
    print timeit.timeit("print fibonacci(32)", number=1, setup="from __main__ import memoized\n@memoized\n" + fib_code)

