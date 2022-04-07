"use strict";

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
console.log(isNaN(NaN));

function isNaN(v) {
  if (v != v) return true;
  else return false;
}

console.log(typeof NaN);

console.log("frog" / "dog");

module.exports = {
  isNaN,
};
