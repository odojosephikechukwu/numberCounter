let addBtn = document.getElementById("add-button");
let minBtn = document.getElementById("min-button");
let digits = document.querySelectorAll(".digit");

let count = 0;
addBtn.addEventListener("click", function () {
    count++;
    let text = String(count).padStart(4, "0");
    // console.log(text[3]);

    digits.forEach((digit, index) => {
        digit.textContent = text[index];
    });
});

minBtn.addEventListener("click", function(){
    count--;
    let text = String(count).padStart(4, "0");

    digits.forEach((digit, index) => {
        digit.textContent = text[index];
    });
});
// let digits = document.querySelectorAll(".digit");

