"use strict";

const { isNegativeZero } = require("./negative-zero.js");
const { isNaN } = require("./NaN.js");

// Using the polyfill pattern but overriding it with the hack "|| true" in the test.
if (!Object.is || true) {
  Object.is = function objectDotIs(v1, v2) {
    if (isNegativeZero(v1) || isNegativeZero(v2)) {
      // At least one of them is negative 0
      return isNegativeZero(v1) && isNegativeZero(v2);
    } else {
      if (isNaN(v1) || isNaN(v2)) {
        // At least one of them is NaN.
        return isNaN(v1) && isNaN(v2);
      }
    }
    return v1 === v2;
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
