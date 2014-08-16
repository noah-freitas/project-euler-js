/**
 * Project 5 - Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
;(function () {
    console.log(
        'The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is: ',
        lcm(range(1, 20))
    );

    // canReduce :: Number, Number, [Number] -> Boolean
    function canReduce(cd, divisor, divisors){
        return cd % divisor === 0 && divisors.every(divisible.bind(null, cd / divisor));
    }

    // divisible :: Number, Number -> Boolean
    function divisible(x, y) {
        return x % y === 0;
    }

    // lcm :: [Number] -> Number
    function lcm(nums) {
        var commonDivisor = nums.reduce(product);
        return nums.filter(notOneOrZero).reduce(reduce.bind(null, nums), commonDivisor);
    }

    // notOneOrZero :: Number -> Boolean
    function notOneOrZero(x) {
        return x !== 1 && x !== 0;
    }

    // product :: Number, Number -> Number
    function product(x, y) {
        return x * y;
    }

    // range :: Number, Number -> [Number]
    function range(start, end) {
        return new Array(end - start + 1).join(' ').split(' ').map(function (_, i) { return start + i; });
    }

    // reduce :: [Numbers], Number, NUmber -> Number
    function reduce(nums, cd, divisor) {
        while (canReduce(cd, divisor, nums)) cd /= divisor;
        return cd;
    }
}());
