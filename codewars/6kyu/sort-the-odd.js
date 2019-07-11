// Instructions
//
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let result = []
  let oddArray = array.filter(x => x % 2 !== 0).sort((a, b) => a - b)

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(oddArray.shift())
    } else {
      result.push(array[i])
    }
  }
  console.log(result)
}

sortArray([5, 3, 2, 8, 1, 4])
sortArray([5, 3, 1, 8, 0])
sortArray([5, 4, 39, 45, 6, 2, 4, 0, 101])
