// Problem 1 Write a Program to load a JavaScript  file in a browser using Promises. Use .then to display an alert when load is complete.
// const loadScript = (src, callback) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//       resolve(src)
//     }
//     document.body.append(script)
//   })
// }
// let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
//  p.then(()=>{
//   alert("Load is complete")
//  })


// Problem 2 Write the same program from previous question using async await.
// const loadScript = async (src, callback) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " is loaded succesfully")
//     }
//     document.body.append(script)
//   })
// }
// main1 = async () =>{
//   let p = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
//   console.log(p);
// }
// main1()

// Problem 3 Create a Promise which rejects after 3 seconds. Use an async/await to get its value. Use try catch to handle its error.
// const loadScript = async (src, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Your promise is rejected after 3 seconds")
//     }, 3000);
//   })
// }

// main = async () => {
//   try {
//     let r = await loadScript();
//     console.log(r)
//   }
//   catch (error) {
//     console.log(error);
//   }
// }
// main()


// Problem 4 Write a Program using Promise.all() inside an async/await to wait 3 promises. Compare its result with the case where we await these promises one by one.

// Compare these two 

let p4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 1000);
  })
}

let p5 = async => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20)
    }, 2000);
  })
}
let p6 = async => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30)
    }, 3000);
  })
}
main3 = async () => {
  console.time("run");
  // let a = await p4();
  // let b = await p5();
  // let c = await p6();
  // console.log(a, b, c);
  let a = p4();
  let b = p5();
  let c = p6();
  let d = await Promise.all([a,b,c]);
  console.log(d);
  console.timeEnd("run");
}
main3()
