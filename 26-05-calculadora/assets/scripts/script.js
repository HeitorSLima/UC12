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
const btnEquals = document.getElementById("btnEq");

const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSoub");
const btnMulti = document.getElementById("btnMulti");
const btnDivide = document.getElementById("btnDivide");

var input = "";
var num1 = "";
var num2 = "";
var calc = "";
var answer = 0;

btn0.addEventListener("click", () => {
    input = "0";
    calculadora();
});

btn1.addEventListener("click", () => {
    input = "1";
    calculadora();
});

btn2.addEventListener("click", () => {
    input = "2";
    calculadora();
});

btn3.addEventListener("click", () => {
    input = "3";
    calculadora();
});

btn4.addEventListener("click", () => {
    input = "4";
    calculadora();
});

btn5.addEventListener("click", () => {
    input = "5";
    calculadora();
});

btn6.addEventListener("click", () => {
    input = "6";
    calculadora();
});

btn7.addEventListener("click", () => {
    input = "7";
    calculadora();
});

btn8.addEventListener("click", () => {
    input = "8";
    calculadora();
});

btn9.addEventListener("click", () => {
    input = "9";
    calculadora();
});

btnClear.addEventListener("click", () => {
    input = "";
    apagarDisplay();
});

btnSoma.addEventListener("click", () => {
    input = "+";
    calc = "+";
    calculadora();
});

btnSub.addEventListener("click", () => {
    input = "-";
    calc = "-";
    calculadora();
});

btnMulti.addEventListener("click", () => {
    input = "*";
    calc = "*";
    calculadora();
});

btnDivide.addEventListener("click", () => {
    input = "/";
    calc = "/";
    calculadora();
});

btnEquals.addEventListener("click", () => {
    input = "=";
    calcular(int(num1), int(num2), calc);
});

function calculadora() {
    if(calc == ""){
        num1 += input;
    } else {
        num2 += input;
    }

    if(calc == "+" || calc == "-" || calc == "*" || calc == "/"){
        disp.textContent += num2;
        input = "";
    }else{
        disp.textContent += num1;
    }
}

function apagarDisplay() {
    input = "";
    disp.textContent = "";
}

function calcular(n1, n2, calculo){

}