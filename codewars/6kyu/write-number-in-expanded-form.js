// Instructions
//
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let result = []
  let numString = num.toString(10).split("").reverse()

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "0"){
      result.push(numString[i].concat("0".repeat(i)))
    }
  }

  console.log(result.reverse().join(" + "))
}

expandedForm(12)
expandedForm(70304)
