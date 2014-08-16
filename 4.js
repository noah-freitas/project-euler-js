/**
 * Problem 4 - Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of
 * two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Browser Support: Firefox 31+
 */
;(function () {
    console.log(
        'The largest palindrome made from the product of two 3-digit numbers is: ',
        [for (x of threeDigit()) for (y of threeDigit()) if (isPalindrome(x * y)) x * y].sort(numeric).pop()
    );

    // isPalindrome :: a -> Boolean
    function isPalindrome(x) {
        return String(x) === String(x).split('').reverse().join('');
    }

    // numeric :: Number, Number -> Number
    function numeric(x, y) {
        return x - y;
    }

    // threeDigit :: undefined -> Number;
    function* threeDigit() {
        var x = 1000;
        while (x > 100) yield x -= 1;
    }
}());
