// Instructions
//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  let strArray = str.toLowerCase().split("")

  for (let i = 0; i <= strArray.length; i++) {
    for(let j = i + 1; j <= strArray.length; j++) {
      if (strArray[j] === strArray[i]) {
        return false
      }
    }
  }
  return true

}

isIsogram("Dermatoglyphics")
isIsogram("aba")
