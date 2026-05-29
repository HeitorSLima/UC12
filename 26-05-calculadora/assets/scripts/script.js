const disp = document.getElementById("disp");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnClear = document.getElementById("btnClear");

btn0.addEventListener("click", () => {
    disp.textContent += "0";
});

btn1.addEventListener("click", () => {
    disp.textContent += "1";
});

btn2.addEventListener("click", () => {
    disp.textContent += "2";
});

btn3.addEventListener("click", () => {
    disp.textContent += "3";
});

btn4.addEventListener("click", () => {
    disp.textContent += "4";
});

btn5.addEventListener("click", () => {
    disp.textContent += "5";
});

btn6.addEventListener("click", () => {
    disp.textContent += "6";
});

btn7.addEventListener("click", () => {
    disp.textContent += "7";
});

btn8.addEventListener("click", () => {
    disp.textContent += "8";
});

btn9.addEventListener("click", () => {
    disp.textContent += "9";
});

btnClear.addEventListener("click", () => {
    disp.textContent = "";
});