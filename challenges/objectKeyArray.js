// Instructions
//
// Given the following array:
//
// people = [{name: "Joe", age: 20}, {name: "Joe", age: 20}, {name: "Jane", age: 21}, {name: "Jake", age: 21}]
//
// return the following output:
//
// // {
// //   20: [{name: "Joe", age: 20}, {name: "Jane", age: 20}],
// //   21: [{name: "Jake", age: 21}]
// // }

const keyFunction = (arrayPeople) => {
  let newObj = {}

  for (let i = 0; i < arrayPeople.length; i++) {
    if (newObj[arrayPeople[i].age]) {
      newObj[arrayPeople[i].age].push(arrayPeople[i])
    } else {
      newObj[arrayPeople[i].age] = [arrayPeople[i]]
    }
  }

  console.log(newObj)
}

keyFunction([{name: "Joe", age: 20}, {name: "Joe", age: 20}, {name: "Jane", age: 21}, {name: "Jake", age: 21}])
