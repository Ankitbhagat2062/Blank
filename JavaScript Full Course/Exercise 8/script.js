// The HTML AudioElement Interface can be used to play audio in the browser.
// Create an alarm clock which display time and plays sound at a user specified time


let btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let clock = document.getElementById("clock");
let btncancel = document.getElementById("btn-cancel");
let btnclock = document.getElementById("btn-clock");
let btntimer = document.getElementById("btn-timer");
let container = document.getElementById("container");
let modalcontent = document.getElementsByClassName("modal-content");

btn.addEventListener("click", function () {
        modalcontent[0].classList.remove("d-none");
        container.style.opacity = "0.01"
})
btncancel.addEventListener("click", function () {
        modalcontent[0].classList.add("d-none");
        container.style.opacity = "1"
})
btnclock.addEventListener("click", function () {
        clock.classList.remove("d-none");
        btntimer.classList.remove("btn-primary");
        timer.classList.add("d-none");
        btnclock.classList.add("btn-primary");
        container.style.opacity = "1"
        Hour.required = false;
        Minute.required = false;
        Second.required = false;
        Clock.required = true;
})
btntimer.addEventListener("click", function () {
        clock.classList.add("d-none");
        btntimer.classList.add("btn-primary");
        timer.classList.remove("d-none");
        btnclock.classList.remove("btn-primary");
        container.style.opacity = "1"
        Hour.required = true;
        Minute.required = true;
        Second.required = true;
        Clock.required = false;
})

let form = document.forms['my-form'];
let Audios = form.audio;
let Hour = form.hour;
let Minute = form.minute;
let Second = form.second;
let Clock = form.clock;
let options = form.audio.options;
Audios.required = true;

// else if (timer.classList.contains("d-none") == false) {

// }
// console.log(timer.classList[1])

let Ct = new Date();
let CurrentTime = Ct.getHours() + ":" + Ct.getMinutes() + ":" + Ct.getSeconds()
console.log("The Current Time length is:" + CurrentTime)
// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
let Currentsecond = (CurrentTime).split(":")[0, 2]
let Currentminute = ((CurrentTime).split(":")[0, 1])
let Currenthour = (CurrentTime).split(":")[0, 0]



form.onsubmit = function (e) {
        e.preventDefault();
        let optionValue = this.audio.value
        console.log(this.repeataudio.value)
        let clockminute = (this.clock.value).split(":")[0, 1]
        let clockhour = (this.clock.value).split(":")[0, 0]
        console.log("Current time:" + (" Currenthour:" + Currenthour), (" Currentminute:" + Currentminute), (" Currentsecond:" + Currentsecond) + "  Alarm will play on(Clock):" + ((clockhour)), ((clockminute)))
        if (optionValue == "bell") {
                console.log(this.audio.value)
                sound = new Audio('bell.mp3');
        }
        else if (optionValue == "bird") {
                sound = new Audio('bird.mp3');
        }
        else if (optionValue == "child") {
                sound = new Audio('child.mp3');
        }
        else if (optionValue == "classic") {
                sound = new Audio('classic.mp3');
        }
        else if (optionValue == "cuckoo") {
                sound = new Audio('cuckoo.mp3')
        }
        if (Clock.required = true) {
                intervalclock = (((Number(clockhour)) - Number(Currenthour)) ) * 60 * 60 + (clockminute - Number(Currentminute)) * 60 - Number(Currentsecond)
                console.log(intervalclock)
                setTimeout(() => {
                        sound.play()
                }, intervalclock * 1000);
        }
        else if (Clock.required = false) {
                H = this.hour.value
                M = this.minute.value
                S = this.second.value
                intervaltimer = H * 60 * 60 + M * 60 + S * 1
                console.log(`Total Seconds :` + intervaltimer, "Alarm will play after" + " Hour:" + H, " Minute:" + M, " Second:" + S)
                setTimeout(() => {
                        sound.play()
                }, intervaltimer * 1000);
        }
        // if (this.repeataudio.value == on) {

        // }
        modalcontent[0].classList.add("d-none");

}
// console.log(menu.options[menu.selectedIndex].value)
// console.log(menu.options.value)



