// Instructions
//
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = 0
  let countO = 0
  let splitArray = str.toLowerCase().split("")

  splitArray.map(n => {
    if (n === "x") {
      countX++
    } else if (n === "o") {
      countO++
    }
  })

  let xo = countX === countO ? true : false

  return xo
  
}
