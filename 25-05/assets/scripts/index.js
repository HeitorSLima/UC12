// pegar os elementos que quero usar
const botao = document.getElementById("secret") // armazena botão
const header = document.querySelector("header") // armazena header

function trocaCor() {
    header.style.backgroundColor = "red";
}

botao.addEventListener("click", trocaCor);