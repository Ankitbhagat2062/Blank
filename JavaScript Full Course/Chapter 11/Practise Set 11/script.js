// Problem 1 Create A javascript class to create a complex number .Creater a constructor to set a real and complex part.
// class Animal {
//   constructor(real, imaginary) {
//     this.real = real
//     this.imaginary = imaginary
//   }
// }

// let a = new Animal( Math.floor(Math.random()*10),Math.floor(Math.random()*10))
// console.log(`${a.real} + ${a.imaginary}i`)


// Problem 2 Write the method to add two complex numbers in previous question.
// class Animal {
//   constructor(real, imaginary) {
//     this.real = real
//     this.imaginary = imaginary
//   }
//   add(num){
//     this.real = this.real + num.real
//     this.imaginary = this.imaginary + num.imaginary
//   }
// }

// let a = new Animal( Math.floor(Math.random()*10),Math.floor(Math.random()*10))
// let b = new Animal( Math.floor(Math.random()*10), Math.floor(Math.random()*10))
// a.add(b)
// console.log(`${a.real} + ${a.imaginary}i`)

// Problem 3 Create a class student from class human. Override the method and see the changes.
// class Human {
//   constructor() {
//     console.log(`Employee has logged in`);
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//   }
// }

// class student extends Human {
//   requestLeaves(leaves) {
//     console.log("One extra is granted")
//   }
// }
// let a = new student()
// a.requestLeaves(3);

// Problem 4 See if student is a instance of human using instance of keyword.
// console.log(student instanceof Human)


// Problem 5 Use the getters and setters to get real and imaginary part of the complex number.
class imaginary {
   constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  get real(){
    return this._real
  }
  set real(real){
     this._real = real
  }
  get  imaginary(){
    return this._imaginary 
  }
  set  imaginary(imaginary){
     this._imaginary = imaginary
  }
}
// let a = new imaginary( Math.floor(Math.random()*10),Math.floor(Math.random()*10))
let a = new imaginary( 2, 4)
a.imaginary = 5
a.real = 3
console.log(`${a.real} + ${a.imaginary}i`)