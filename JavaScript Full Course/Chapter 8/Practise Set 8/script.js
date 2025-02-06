// Problem 1 Write a Program to different alerts when when different alert are clicked . 
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener('click',(e)=>{
    alert('Hello Button 1 Clicked')
})
btn2.addEventListener('click',(e)=>{
    alert('Hello Button 1 Clicked')
})
// Problem 2 Create a Website which is capable of storing bookmarks of your favourite websites.


// Problem 3 Repeat Question 2 using Event Listenenrs .
document.getElementById("google").addEventListener("click", function() { 
  window.location = "https://www.google.com";
win.focus();

})

// Problem 4 Write a JavaScript Program To keep fetching the contents of a program evry 5 seconds.

const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json()
  return a;
}

setInterval(async function() {
  let url = "https://jsonplaceholder.typicode.com/todos/1"
  console.log(await fetchContent(url))
}, 3000)

// Problem 5 Create a Glowing Bulb Effect using Classlist toggle in JavaScript .

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 300)