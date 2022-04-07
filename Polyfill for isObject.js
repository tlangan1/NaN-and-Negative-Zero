"use strict";

const { isNegativeZero } = require("./negative-zero.js");
const { isNaN } = require("./NaN.js");

// Using the polyfill pattern but overriding it with the hack "|| true" in the test.
if (!Object.is || true) {
  Object.is = function objectDotIs(v1, v2) {
    if (typeof v1 != typeof v2)
      // They are of different types
      return false;
    else {
      if (typeof v1 == "number") {
        if (isNegativeZero(v1) || isNegativeZero(v2)) {
          if (isNegativeZero(v1) && isNegativeZero(v2)) {
            // They are both -0.
            return true;
          } else {
            // One is -0 and the other is not.
            return false;
          }
        } else {
          if (isNaN(v1) || isNaN(v2)) {
            // At least one of them is NaN.
            if (v1 != v1 && v2 != v2) {
              // They are both NaN
              return true;
            } else {
              // One is NaN and the other is not
              return false;
            }
          }
        }
      }
      return v1 === v2;
    }
  };
}

console.log(
  Object.is(undefined, null) == false
    ? "This test passed!"
    : "This test falied."
);
console.log(
  Object.is("frog", "dog") == false ? "This test passed!" : "This test falied."
);
console.log(
  Object.is(-0, -0) == true ? "This test passed!" : "This test falied."
);
console.log(
  Object.is(NaN, NaN) == true ? "This test passed!" : "This test falied."
);
console.log(
  Object.is(0, -0) == false ? "This test passed!" : "This test falied."
);
console.log(
  Object.is(2, 3) == false ? "This test passed!" : "This test falied."
);
console.log(
  Object.is(2, 2) == true ? "This test passed!" : "This test falied."
);
