class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running!")
    }
    shout() {
        console.log(this.name + " is barking!")
    }
    colors() {
        console.log(this.name + " is " + this.color + " color ")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana")
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("Bruno", "white")
let m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.run()
m.colors()
// ani.hide() //This will throw an error