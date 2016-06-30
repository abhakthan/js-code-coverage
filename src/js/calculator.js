/**
 * Created by abhakthan on 6/30/16.
 */
"use strict";

function Calculator() {
  return {
    add: function (a, b) {
      return a + b;
    },

    subtract: function (a, b) {
      return a - b;
    },

    multiply: function (a, b) {
      return a * b;
    },

    divide: function (a, b) {
      return a / b;
    }
  };
}