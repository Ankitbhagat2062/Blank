// Questtion Create a Digital Clock Using setInterval and Date Object in JavaScript. The Date object can be used to get the date time , hours , minutes and seconds which can be the updated using SetInterval. Try Kepp the UI good looking
let a = new Date()
timeNow = document.getElementById("timenow")
setInterval(() => {
  let a = new Date()
  time = `${(a.toTimeString()).split(" ")[0]}`
  let Hour = time.split(":")[0,0] 
  let Second = time.split(":")[0,2] 
  if (Hour >= 12) {
    Hour = Hour - 12
    Second =  Second + " PM"
  }
  else if (Hour < 12) {
    Second =  Second + " AM"
  }
  timeNow.innerHTML = Hour + ":" + time.split(":")[0,1] +":" + Second + `<br>` + (a.toTimeString()).split(" ")[1]  + (a.toTimeString()).split(" ")[2] +  (a.toTimeString()).split(" ")[3]

}, 1000)
// console.log(timeNow)

// let d = a.getDate()
// h = a.getHours()
// M = a.getMinutes()
// second = a.getSeconds()
// let month1 = [" January ", " February ", " March ", " April ", " May ", " June ", " July ", " August ", " September ", " October ", " November ", " December "]
// let month2 = { ...month1 }
// let day1 = ["Sun", "Mon", "Tue", "Wednes", "Thurs", "Fri", "Satur"]
// let day2 = { ...day1 }
// let Y = a.getFullYear()
// let M = a.getMonth()
// let D = a.getDay()
// for (let i = 0; i <= month1.length; i++) {
//   if (i == M) {
//     month = month1[i];
//     // console.log(month)
//   }
//   if (i == D) {
//     day = day1[i];
//     // console.log(day)
//   }
// }
document.getElementById("datenow").innerHTML = `${a.toDateString()} `

