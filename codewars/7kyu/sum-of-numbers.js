// Instructions
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//
// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum (a, b) {
  let firstNumber = a < b ? a : b
  let lastNumber = a > b ? a : b
  let numberArray = []

  for (let i = firstNumber; i <= lastNumber; i++) {
    numberArray.push(i)
  }

  if (numberArray.length === 1) {
    return numberArray[0]
  } else {
    return numberArray.reduce((a ,b) => a + b)
  }
}
