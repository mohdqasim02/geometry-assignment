const test = require("../lib/testing.js");
const shape = require("../src/square.js");

const square = shape.square;

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", square(4), 'should give square of given length');
}

testSquare();
