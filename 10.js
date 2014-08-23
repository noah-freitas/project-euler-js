/**
 * Problem 10 - Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 *
 * Browser Support: Firefox 31+
 */
;(function () {
    console.log(
       'The sum of all the primes below two million is: ',
       [for (p of primesBelow(2000000)) p].reduce(sum)
    );

    // primesBelow :: Number -> Number
    function* primesBelow(end) {
        var primes = [2, 3];

        for (let prime of primes) if (prime < end) yield prime;

        for (let i = primes[primes.length - 1] + 2; i < end; i += 2)
            if (primes.every((p) => i % p !== 0)) {
                primes.push(i);
                yield i;
            }
    }

    // sum :: Number, Number -> Number
    function sum(x, y) {
        return x + y;
    }
}());
