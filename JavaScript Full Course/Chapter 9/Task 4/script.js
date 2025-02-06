let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am resolved")
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})

// Quick Quiz 1 : Rewrite loadScript functions we wrote in the Task 1 of This Chapter using Promises. 
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = function() {
            resolve(src);
        }
        script.onerror = function() {
            reject(new Error("Src got some error"))
        }
        document.body.appendChild(script);
    }) 
}   
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",)