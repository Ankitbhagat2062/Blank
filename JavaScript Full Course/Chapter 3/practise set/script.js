//Q1  Write a program to print marks of a student in an object using for loop
let marks = {ankit : 98, rahul : 75, bibek : 87, Monika: 4}
  for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  
  // Question No 2 Write the program in Q1 using for in loop
  for (let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key])
  }
  
  //  Question No 3 Write a program to "try Again " until the user prints the correct number
  let cn = 43
  let i
  while (i != cn) {
    console.log("Try again")
    i = prompt("Enter a number")
  }
  console.log("You have entered a correct number")
  
  // Question No 4 Write a function to find mean of 5 numbers
  const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
  }
  
  console.log(mean(4, 5, 6, 7))