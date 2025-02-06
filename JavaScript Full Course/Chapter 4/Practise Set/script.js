// Question No 1 What will the followinf print in the Java Script 
// console.log("Har\")
let str = "Har\""
console.log(str.length)

// Question 2 Explore the includes startswith and endwith functions of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
// console.log(sentence.includes(word))
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Question 3  Write a program to convert a given string to Lower Case
// console.log(word.toLowerCase())
// console.log(word.toUpperCase())

// Question 4 Extract the amount out of this string  "Please give Rs 1000"
let string = "Please give Rs 1000";
for (let index = 0; index < string.length; index++) {
    if (string[index] == 1) {
        console.log(Number.parseInt(string.slice(index,)))
    }
}

// Question 5 Try to change the 4th character of a string . Were you able to do it ?
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable