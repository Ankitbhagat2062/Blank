// Write A Java Script Program to generate a random number and store it in a variable. The program takes an input from the user to tell whether the guess was correct, greater or lesser than the original number. (100-number )of guesses is score of an user. The program is expected to terminate once the number is guessed. Number should be between 1 and 100.
let number = Math.floor(Math.random()*100);
// console.log(number)

let guess;
let chances = 0;
do{
  guess = prompt("Enter a number between 1 and 100");
  guess = Number.parseInt(guess);
  if(guess>number){
    console.log("Your guessed number is greater than the  Actual number");
    chances++
  }
  else if(guess<number){
    console.log("Your guessed number is less than the Actual  number");
  }
  else if(guess==number){
    console.log("Your guessed number is equal to Actual number.So you won the game");
    chances++
  }
} while(guess!=number)
console.log("You scored ",100-chances,"points")