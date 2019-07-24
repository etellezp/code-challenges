// Instructions
//
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.


function reverse(str) {
  let reverseArray = []
  let strArray = str.split(" ")

  for (let i = 0; i < strArray.length; i++) {
    if ((i + 1) % 2 === 0) {
      reverseArray.push(strArray[i].split("").reverse().join(""))
    } else {
      reverseArray.push(strArray[i])
    }
  }

  console.log(reverseArray.join(" ").trim())
}

reverse("Reverse this string, please!")
