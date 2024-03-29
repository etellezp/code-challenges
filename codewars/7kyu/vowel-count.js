// Instructions
//
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;

  str.split("").map(letter => {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowelsCount++
    }
  })

  return vowelsCount;
}
