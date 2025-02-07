// Problem 1 Use a Free API from the internet and fead your app with live data.
let url = "https://goweather.herokuapp.com/weather/Ny"
// let p = fetch("https://codeforces.com/api/contest.list?gym=false");
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://media.istockphoto.com/id/2018226903/photo/every-day-magical-scenery-of-manhattan-new-york-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=USzH_HVyfTAGF2_rxqoNkr-bYpjP4gFnfDvLJJ7u4UU=" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">The Temperature in NewYork is:${contests.temperature}</h5>
                                        <p class="card-text">Wind is at ${contests.wind} and is predicted to have ${contests.description}</p>
                                        <p class="card-text"> In the Next 24hour or ${contests.forecast[0].day}'st Day </p>
                                        <p>The Temperature will be  at: ${contests.forecast[0].temperature} and wind is at ${contests.forecast[0].wind} </p>
                                        <p class="card-text"> In the Next 48 hour or ${contests.forecast[1].day}'nd Day </p>
                                        <p>The Temperature will be  at: ${contests.forecast[1].temperature} and wind is at ${contests.forecast[1].wind}</p>
                                        <p class="card-text"> In the Next 48 hour or ${contests.forecast[2].day}'rd Day </p>
                                        <p>The Temperature will be  at: ${contests.forecast[2].temperature} and wind is at ${contests.forecast[2].wind}</p>
                                        <a href="${contests.forecast[0].day}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
  }
  cardContainer.innerHTML = ihtml
})

/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// Problem 2 Create a Note Saving App which stores yourNote in the Local Storage.
// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }


// Problem 3 Read the Last Question and fetch the note which was saved .
// let n = localStorage.getItem("note")
// alert("Your note is " + n)




// Problem 4 Delete the note in the previous Question.
// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }