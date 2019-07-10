// Instructions
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let finalArray = []
  let splitArray = s.toLowerCase().split('')

  let accumArray = splitArray.map((letter, index) => {
    finalArray.push(letter.repeat(index + 1))
  })

  for (let i = 0; i < finalArray.length; i++) {
    finalArray[i] = finalArray[i].charAt(0).toUpperCase() + finalArray[i].slice(1)
  }

  return finalArray.push("-")
}
