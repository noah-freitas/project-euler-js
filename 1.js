/**
 * Problem 1 - Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 * these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
;(function () {
    var result = numbersTo(999).filter(multipleOfThreeOrFive).reduce(sum);
    console.log('The sum of all the multiples of 3 or 5 below 1000 is: ', result);

    // numbersTo :: Number -> [Number]
    function numbersTo(end) {
        return new Array(end).join(' ').split(' ').map(function (_, i) { return i + 1; });
    }

    // multipleOfThreeOrFive :: Number -> Boolean
    function multipleOfThreeOrFive(x) {
        return x % 3 === 0 || x % 5 === 0;
    }

    // sum :: Number, Number -> Number
    function sum(a, b) {
        return a + b;
    }
}());
