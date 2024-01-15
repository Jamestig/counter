let count = 0;
let countEl = document.getElementById('count-el');
let previousEl = document.getElementById('previous-el');

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let display = count + ' - '
    previousEl.textContent += display;
    count = 0;
    countEl.textContent = 0;
}

let myName = 'James'
let greeting = 'Hello'
let text = document.getElementById('welcome-el');

text.innerText = greeting + myName;

text.innerText = text.innerText + 'Hi'