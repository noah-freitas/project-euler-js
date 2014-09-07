/**
 * Problem 14 - Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 *      n → n/2 (n is even)
 *      n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *      13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10
 * terms. Although it has not been proved yet (Collatz Problem), it is thought that
 * all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */
;(function () {
    console.log(
        'The number, less than 1 million, that produces the longest Collatz sequence is: ',
        [for (n of numbersTo(1000000)) n]
                .map(numberAndCollatzSequenceLength)
                .sort(tupleSort(1, numeric))
                .shift()[0]
    );

    // collatzSequence :: Number -> Number*
    function* collatzSequence(n) {
        yield n;

        while (n !== 1) yield n % 2 === 0 ? (n /= 2) : (n = 3 * n + 1);
    }

    // collatzSequenceLength :: Number -> Number
    function collatzSequenceLength(n) {
        let len = 0;
        for (let n1 of collatzSequence(n)) len++;
        return len;
    }

    // numberAndCollatzSequenceLength :: Number -> [Number, Number]
    function numberAndCollatzSequenceLength(n) {
        return [n, collatzSequenceLength(n)];
    }

    // numbersTo :: Number -> Number*
    function* numbersTo(end) {
        let n = 1;
        while (n < end) yield n++;
    }

    // numeric :: Number, Number -> Number
    function numeric(x, y) {
        return y - x;
    }

    // tupleSort :: Number, (a, a -> Number) -> ([a], [a] -> Number)
    function tupleSort(i, fn) {
        return function (t1, t2) {
            return fn(t1[i], t2[i]);
        }
    }
}());
