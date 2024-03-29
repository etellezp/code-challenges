// Instructions
//
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
// summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let numArray = []

  while (num > 0) {
    numArray.push(num)
    num--
  }

  return numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
}

summation(1)
summation(8)
