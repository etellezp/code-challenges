// Instructions
//
// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
//
// Example:
//
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (array === null || array === [] || array.length <= 1) {
    return 0
  }

  return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => {
    return a + b
  }, 0)
}
