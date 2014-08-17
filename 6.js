/**
 * Problem 6 - Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is,
 *      1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *      (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural
 * numbers and the square of the sum.
 */
;(function () {
    console.log(
        'The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is: ',
        squareSum(range(1, 100)) - sumSquares(range(1, 100))
    );

    // range :: Number, Number -> [Number]
    function range(start, end) {
        return new Array(end - start + 1).join(' ').split(' ').map(function (_, i) { return start + i; });
    }

    // square :: Number -> Number
    function square(x) {
        return Math.pow(x, 2);
    }

    // squareSums :: [Number] -> Number
    function squareSum(nums) {
        return square(nums.reduce(sum));
    }

    // sum :: Number, Number -> Number
    function sum(x, y) {
        return x + y;
    }

    // sumSquares :: [Number] -> Number
    function sumSquares(nums) {
        return nums.map(square).reduce(sum);
    }
}());
