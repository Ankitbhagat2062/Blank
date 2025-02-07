let a = {
  name2: "Harry",
  language: "JavaScript",
  run: () => {
    console.log("self run")
  }
}
console.log(a)


let p = {
  run: () => {
    console.log("run")
  }
}

p.__proto__ = {
  name: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name)