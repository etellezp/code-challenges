// Instructions
//
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){

  let numbersArray = numbers.split(" ").map(n => parseInt(n, 10)).sort((a, b) => a - b)
  let highNumber = numbersArray[numbersArray.length - 1].toString()
  let lowNumber = numbersArray[0].toString()

  return highNumber + " " + lowNumber
}
