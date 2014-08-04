/**
 * Problem 3 - Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
;(function () {
    var result = primeFactors(600851475143).pop();
    console.log('The largest prime factor of the number 600851475143 is: ', result);

    // factors :: Number -> [Number]
    function factors(x) {
        var facts             = [1],
            originalDiv = div = x;

        while (div % 2 === 0)                                    { facts.push(2); div /= 2; }
        for   (var i = 3; i < div; i += 2) while (div % i === 0) { facts.push(i); div /= i;  }
        if    (div !== originalDiv)                                facts.push(div);
        facts.push(originalDiv);

        return facts;
    }

    // isPrime :: Number -> Boolean
    function isPrime(x) {
        return factors(x).length === 2;
    }

    // numeric :: Number, Number -> Number
    function numeric(x, y) {
        return x - y;
    }

    // primeFactors :: Number -> [Number]
    function primeFactors(x) {
        return factors(x).filter(isPrime);
    }
}());