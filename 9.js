/**
 * Problem 9 - Special Pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *      a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * Browser Support: Firefox 31+
 */
;(function () {
    console.log(
       'The product of the Pythagorean triplet whose sum is 1000 is: ',
       [for (trip of tripletAddendsOf(1000)) if (pythagoreanTriplet(...trip)) trip][0].reduce(product)
    );

    // tripletAddendsOf :: Number -> [Number, Number, Number]
    // TODO: This could use a more readable algorithm.
    function* tripletAddendsOf(sum) {
        var x = 1, y = 1, z = sum - 2, yStart, zStart;

        yield [x, y, z];

        while ([x, y, z].every(greaterThan0) && y < z) {
            [yStart, zStart] = [y, z];

            while (z - 1 > y + 1) yield [x, ++y, --z];

            [y, z] = [yStart + 1, zStart - 1];

            yield [++x, y, --z];
        }
    }

    // greaterThan0 :: Number -> Boolean
    function greaterThan0(n) {
        return n > 0;
    }

    // product :: Number, Number -> Number
    function product(x, y) {
        return x * y;
    }

    // pythagoreanTriplet :: Number, Number, Number -> Boolean
    function pythagoreanTriplet(x, y, z) {
        return x < y && y < z
            && Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2);
    }

    // sum :: Number, Number -> Number
    function sum(x, y) {
        return x + y;
    }
}());
