/*jslint node: true */
"use strict";

/**
 * Format and show the promise value on the console.
 */
exports.show = function (v) {
    console.log(JSON.stringify(v, null, 4));
    return v;
};

/**
 * Replace the promise value with nothing.
 */
exports.ignore = function () {
    return null;
};

/**
 * Do nothing.
 */
exports.nop = function (v) {
    return v;
};

/**
 * Create a function pair that can capture and re-introduce a promise value.
 */
exports.createCapture = function () {
    var captured = false,
        value = undefined;
    return {
        /*
         * store the promise value for later retrieval. Can only be used once.
         */
        assign: function (v) {
            if (captured) {
                throw new Error("Capture is already assigned.");
            }
            value = v;
            captured = true;
            return v;
        },
        /*
         * emit the promise value. Can only be used after assignment.
         */
        use: function () {
            if (!captured) {
                throw new Error("Capture is not assigned.");
            }
            return value;
        }
    };
};



