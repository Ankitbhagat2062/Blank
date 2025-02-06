// Question 1 Create a navbar and change the color of its first Element to Red 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Question 2 Create a table without tbody . Now use "View page sorce" to check whetjer it has tbody or not 
//  Answer --> No 

// Question 3 Create an Element with Children. Now change the color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Green"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "Green"

// Question 4 Write a javascript code to change the background of all <li> tags to cyan 
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.backgroundColor = "cyan"
});

// Question 5 Which of the following is used to look for the farthest ancestor that matches a given CSS Selector 
// (a) matches (b)closest (c)contains (d)None
