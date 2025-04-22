const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// Testing base cases.
assert(factorial(0) === 1);
assert(factorial(1) === 1);

// Included test.
assert(factorial(10) === 3628800);

// Testing larger values.
assert(factorial(20) === 2432902008176640000);

// Testing base cases.
assert(e(0) === 1);
assert(e(1) === 2);

// Included test.
assert(e(10) === 2.7182818011463845);

// Accuracy of e should increase as n increases, resulting
// in a slightly larger value.
assert(e(15) > e(10));
assert(e(16) > e(15));
// From my testing e(17) is the most accurate the code
// gets in it's current form.
assert(e(17) > e(16));