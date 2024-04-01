// document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("save-el");

let totalCount = 0;
let totalSaveEl = 0;

function increment() {
    totalCount = totalCount + 1;  
    countEl.innerText = totalCount;
}

function save() {
    totalSaveEl = totalCount;
    totalEl.innerText = totalSaveEl; 
}


