// Q1  Creat a Variable of type string and try to add a number to it 
let a = "ankit";
let b = 56;
console.log(a+b);

// Q2 Use typeof operator to find data type of string in last question
c = a + b
console.log(typeof c);

// Q3 Create a const object in Javascript . Can you change it to hold a number later ?
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
  }
//   item = 54  //   Not Allowed

//   Q4 Try to add a new key in the const object in problem 3 . Wre you able to do it ?
item["Harry"]= false;
item["ankit"]= true;
console.log(item)

// Q5 Write a JS program to create a word meanng dictionary of 5 words 
const dictionary = {
    handsome :"(of a man) good-looking.",
    footle : "to talk or act foolishly",
lexicon : "the vocabulary of a person, language, or branch of knowledge.",
goosebumps: "a state of the skin caused by cold, fear, or excitement, in which small bumps appear on the surface as the hairs become erect; goose pimples.",
appreciate : "recognize the full worth of."
}
console.log(dictionary["footle"]);