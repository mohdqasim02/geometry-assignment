const isEven = function(num) {
  return num % 2 === 0;
}

const isOdd = function(num) {
  return !(isEven(num));
}

const selectEvenNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isEven(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const selectOddNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isOdd(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

exports.selectEvenNumbers = selectEvenNumbers;
exports.selectOddNumbers = selectOddNumbers;
