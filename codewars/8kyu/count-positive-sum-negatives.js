// Instructions
//
// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
// If the input array is empty or null, return an empty array.
//
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let finalArray = []
  let countPositives = 0
  let sumNegatives = 0

  if (input != null) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++
      } else {
        sumNegatives += input[i]
      }
    }
  }

  finalArray.push(countPositives)
  finalArray.push(sumNegatives)

  if (finalArray[0] === 0 && finalArray[1] === 0) {
    finalArray = []
    return finalArray
  } else {
    return finalArray
  }
}
