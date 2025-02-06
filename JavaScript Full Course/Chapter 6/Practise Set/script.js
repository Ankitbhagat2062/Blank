// Problem 1 Write a program using prompt function to take input of a age as a value from  the user and use alert to tell him if he can drive.
let input = prompt("Enter Your Age");
if (input > 18) {
    console.log("You can Drive")
}

// Problem 2 In question 1 use confirm to ask the user if he wants to see the prompt again 
let conform = confirm("Do You want to see Prompt Again");
if (conform) {
    let input = prompt("Enter Your Age");
}

// Problem 3 In the previous question use console.error to log the error if age entered is negative.
if (input<0) {
    console.error("Invalid Age")
}

// Problem 4 Write a program to change the url to google.com(redirection) if user enters a nummber greater than 4.
if (input>4) {
    location.href ="www.goole.com";
}

// Problem 5 Change the background of the page to red , yellow orany other color based on the user input through prompt
let color = prompt("Please Enter your desired background color of the page");
document.body.style.backgroundColor =  color;