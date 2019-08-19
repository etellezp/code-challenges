// Instructions
//
// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
//
// Note
// consecutive strings : follow one after another without an interruption

const longestConsec = (strarr, k) => {
  if ((strarr.length === 0) || (k > strarr.length) || (k <= 0)) {
    return ""
  }

  let longestString = ""

  for(let i = 0; i < strarr.length; i++) {
    let currentCombination = strarr.slice(i, k + i).join("")

    if (currentCombination.length > longestString.length) {
      longestString = currentCombination
    }
  }

  return longestString
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
