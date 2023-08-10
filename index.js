let saveEl = document.getElementById("saveEl")
let countEl = document.getElementById("count-el");

let count = 0;


function increment() {
   count++;
   countEl.textContent = count;
}

function save() {
    console.log(count);
    let countDash = count + " - ";
    saveEl.textContent += countDash
    count = 0;
    countEl.textContent = 0;
}