// Instructions
//
// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  let i = 0
  let wordArray = []

  while(i < n) {
    wordArray.push(s)
    i++
  }

  console.log(wordArray.join(""))
}

repeatStr(3, "*")
repeatStr(5, "#")
repeatStr(2, "ha ")
