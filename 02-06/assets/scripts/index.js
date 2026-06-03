/* const div = document.querySelector("div");
const btn = document.getElementById("btn");
const btnRem = document.getElementById("btn2");

btn.addEventListener("click", () => {
    // criamos um elemento de tag p
    const paragrafo = document.createElement("p");

    // precisamos dar um conteúdo a ele
    paragrafo.textContent = "p criado";

    // depois precisamos dizer aonde ele ficara no html
    div.appendChild(paragrafo);
});

btnRem.addEventListener("click", () => {
    const paragrafos = div.querySelectorAll("p");
    if(paragrafos.length > 0){
        paragrafos[0].remove();
    }
}); */

const btn1 = document.getElementById("btn1");
const titulo1 = document.getElementById("titulo1");

btn1.addEventListener("click", () => {
    if(titulo1.textContent == "Clique no botão para alterar este texto"){
        titulo1.textContent = "Clique para alterar de novo";
    }else{
        titulo1.textContent = "Clique no botão para alterar este texto";
    }
});

/* ----- */

const btn2 = document.getElementById("btn2");
const titulo2 = document.getElementById("titulo2");

btn2.addEventListener("click", () => {
    titulo2.toggleAttribute("hidden");
});

/* ----- */

