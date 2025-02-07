// Problem 1 Write a JavaScript program to print the following after 2 seconds.
// 1 Hello 
// 2 World 
// let p = async(text)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//        resolve(text)
//     }, 2000);
//   })
// }
// (
//   async()=>{
//     let a = await p("Hello")
//     console.log(a)
//     let b = await p("World")
//     console.log(b)
//   }
// )()

// Problem 2 Write a JavaScript Program to find average of numbers in an array using spread syntax.
// let a = [1,2,3]
// let sum =(a,b,c)=>{
//   return (a + b + c)/3
// }
// console.log(sum(...a))

// Problem 3 Write a JavaScript Program which resolves a promise after n seconds The function takes n as the parameter.Use an IIFE toexecute the functions with different value of n.
let promise = async(text,n)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
       resolve(text)
    }, n *1000);
  })
}
(
  async()=>{
    let a = await promise("Hello", 2)
    console.log(a)
  }
)()




// Problem 5 Write the simple interest calculator using javascript.
function SI(p,t,r) {
  return (p * t * r) / 100
}
SI(100, 2 , 3)