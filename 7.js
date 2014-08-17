/**
 * Problem 7 - 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10,001st prime number?
 *
 * Browser Support: Firefox 31+
 */
;(function () {
    for (var x of primes(10001)) void 0;
    console.log('The 10,001st prime is: ', x);

    // factors :: Number -> [Number]
    function factors(x) {
        var facts             = [1],
            originalDiv = div = x;

        while (div % 2 === 0)                                    { facts.push(2); div /= 2; }
        for   (var i = 3; i < div; i += 2) while (div % i === 0) { facts.push(i); div /= i;  }
        if    (div !== originalDiv && div !== 1)                   facts.push(div);
        if    (originalDiv !== 2)                                  facts.push(originalDiv);

        return facts;
    }

    // integers :: Number -> Number
    function* integers(start) {
        yield start;
        while (true) yield start += 1;
    }

    // isPrime :: Number -> Boolean
    function isPrime(x) {
        return factors(x).length === 2;
    }

    // primes :: Number -> Number
    function* primes(max) {
        var count = 1;
        for (var x of integers(2)) {
            if (!isPrime(x)) continue;
            if (count > max) return;
            count++;
            yield x;
        }
    }
}());
