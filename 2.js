/**
 * Problem 2 - Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting
 * with 1 and 2, the first 10 terms will be:
 *
 *   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find
 * the sum of the even-valued terms.
 */
;(function () {
    var result = fibonacciLessThan(4000000).filter(even).reduce(sum);
    console.log('The sum of all the even fibonacci numbers less than 4,000,000 is: ', result);

    // even :: Number -> Boolean
    // Returns true if `x` is even, false otherwise.
    function even(x) {
        return x % 2 === 0;
    }

    // fibonacciLessThan :: Number -> [Number]
    // Returns an array of all the Fibonacci numbers less than `max`, exclusive.
    function fibonacciLessThan(max) {
        return max <   1 ? [] :
               max === 2 ? [1]
                         : recurseFib([1, 2], max);
    }

    // recurseFib :: [Number], Number -> [Number]
    // Recursively computes the next fibonacci number up to the `max`.
    function recurseFib(fibs, max) {
        var next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        return next < max ? recurseFib(fibs.concat([next]), max) : fibs;
    }

    // sum :: Number, Number -> Number
    // Returns the sum of `a` and `b`.
    function sum(a, b) {
        return a + b;
    }
}());