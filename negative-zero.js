"use strict";

console.log(0 === -0);
console.log(Object.is(0, -0));

function isNegativeZero(v) {
  return v === 0 && 1 / v === -Infinity;
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
