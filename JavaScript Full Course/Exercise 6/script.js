// Create a Todo List App capable of storing your todos in local storage . Add an option to create , delete and access all the Todo's . Try to make UI as good as possible.
a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
if (m <= 9) {
    m = "0" + m
}
if (h >= 12) {
    h = h - 12
    if (s <= 9) {
        s = "0" + s
    }
    if (h <= 9) {
        h = "0" + h
    }
    s = s + " PM"
}
time = `${h}:${m}:${s}`
let D = a.getDay()
let d = a.getDate()
let M = a.getMonth()
if (M == 0) {
    M = "January"
}
else if (M == 1) {
    M = "February"
}
else if (M == 2) {
    M = "March"
}
else if (M == 3) {
    M = "April"
}
if (M == 4) {
    M = "May"
}
else if (M == 5) {
    M = "June"
}
else if (M == 6) {
    M = "July"
}
else if (M == 7) {
    M = "August"
}
else if (M == 8) {
    M = "September"
}
else if (M == 9) {
    M = "October"
}
else if (M == 10) {
    M = "November "
}
else if (M == 11) {
    M = " December"
} if (D == 0) {
    D = "Sun"
}
else if (D == 1) {
    D = "Mon"
}
else if (D == 2) {
    D = "Tues"
}
else if (D == 3) {
    D = "Wednes"
}
if (D == 4) {
    D = "Thurs"
}
else if (D == 5) {
    D = "Fri"
}
else if (D == 6) {
    D = "Satur"
}
let Y = a.getFullYear() + `${D}Day${M}${d}`
let dlt = document.getElementById("dlt");
let dltall = document.getElementById("dltall");
const btn = document.getElementById('btn')
const acc = document.getElementById('acc')
const copy = document.getElementById('copy')
let todo = document.getElementById('todo')
let Access = document.getElementById('access')
let li = document.querySelectorAll('list-group-item');

btn.addEventListener("click", function () {
    let name = prompt('Enter your Todo Name ')
    let todolist = prompt('Enter your Todo')
    b = ` <li class="list-group-item"><p id="${Y}${time}">${name}_ Year:-${Y} Time:-${time}</p>
              <p>${todolist}</p></li>`
    todo.insertAdjacentHTML('afterbegin', b);
    localStorage.setItem(name, todolist)

})
acc.addEventListener("click", function () {
    let todo = prompt('Enter the name of your Todolist you want to access');
    let yourTodo = (`<li id="copytextid" class=" list-group-item">The TodoList of ${todo} is ${localStorage.getItem(todo)}
                   <button id="copy" class="" onclick="copyText()">Copy</button></li>`)
    Access.insertAdjacentHTML('afterbegin', yourTodo);
})
dlt.addEventListener("click", function () {
    let conform = confirm("Do you want to delete your todo list",);
    if (conform == true) {
        let todo = prompt('Enter the name of your Todolist you want to delete');
        localStorage.removeItem(todo)
    }
})
dltall.addEventListener("click", function () {
    let conform = confirm("Do you want to delete all of your todo list",);
    if (conform == true) {
        localStorage.clear()
    }
})
console.log(`Year:-${Y} Time:-${time}`)

