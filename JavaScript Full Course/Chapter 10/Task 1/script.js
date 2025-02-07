let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((value) => {
  // console.log(value.status)
  // console.log(value.ok)
  console.log(value.headers)
  return value.json()
}).then((value1)=>{
  console.log(value1)
})