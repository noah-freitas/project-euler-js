/**
 * Problem 15 - Lattice paths
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to
 * the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */
;(function () {
    'use strict';

    console.log(`There are exactly ${ routesThroughGridOf(20, 20) } routes through a 20x20 grid`);

    // routesThroughGridOf :: Number, Number -> Number
    function routesThroughGridOf(cols, rows) {
        return cols > 0 && rows > 0
             ? routesThroughGridOf(cols - 1, rows) + routesThroughGridOf(cols, rows - 1)
             : 1;
    }
}());