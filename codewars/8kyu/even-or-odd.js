// Instructions
//
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 !== 0) {
    return "Odd"
  } else {
    return "Even"
  }
}

even_or_odd(2)
even_or_odd(0)
even_or_odd(7)
even_or_odd(1)
