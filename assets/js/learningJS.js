const isStrictlyEqual = (a, b) => {
  return typeof a == typeof b && a == b;
};

// isStrictlyEqual(0, -0) => true
// isStrictlyEqual(1, -1) => false
// isStrictlyEqual(NaN, NaN) => false
// isStrictlyEqual(true, true) => true

console.log(isStrictlyEqual([], 0));
console.log(isStrictlyEqual(1, -1));
console.log(isStrictlyEqual(NaN, NaN));
console.log(isStrictlyEqual(true, true));
//   if (a != 0) {
//     return isNaN(a) == true ? false : Object.is(a, b);
//   }
//   return true;
