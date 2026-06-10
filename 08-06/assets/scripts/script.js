const perguntas = [
    {
        categoria: "AS3",
        texto: "Qual a função usada para mudar o frame exibido e parar nele em um MovieClip?",
        opcoes: ["gotoAndStop();", "gotoAndPlay();", "stop();", "changeFrame();"],
        correta: 0,
        explicacao: "A função gotoAndStop(); é usada para ir ao frame específico e parar lá. isso é muito usado em menus que ficam escondidos fora da tela.",
    },
    {
        categoria: "AS3",
        texto: "Qual a função usada para iniciar ou continuar a reprodução da timeline de um MovieClip?",
        opcoes: ["play();", "start();", "resume();", "gotoAndPlay();"],
        correta: 0,
        explicacao: "A função play(); faz com que o MovieClip reproduza sua timeline a partir do frame atual."
    },
    {
        categoria: "AS3",
        texto: "Qual função é utilizada para interromper a reprodução da timeline no frame atual?",
        opcoes: ["pause();", "stop();", "freeze();", "halt();"],
        correta: 1,
        explicacao: "A função stop(); interrompe a reprodução da timeline exatamente no frame em que está."
    },
    {
        categoria: "AS3",
        texto: "Qual evento é disparado quando o usuário clica em um botão ou MovieClip?",
        opcoes: ["MouseEvent.DOWN", "MouseEvent.PRESS", "MouseEvent.CLICK", "MouseEvent.SELECT"],
        correta: 2,
        explicacao: "MouseEvent.CLICK é acionado quando o usuário realiza um clique completo sobre o objeto."
    },
    {
        categoria: "AS3",
        texto: "Qual comando adiciona um objeto visual ao palco ou a outro DisplayObjectContainer?",
        opcoes: ["attachChild();", "insertChild();", "addObject();", "addChild();"],
        correta: 3,
        explicacao: "A função addChild(); adiciona um DisplayObject à lista de exibição."
    },
    {
        categoria: "AS3",
        texto: "Qual propriedade define a transparência de um objeto em AS3?",
        opcoes: ["opacity", "alpha", "visible", "transparency"],
        correta: 1,
        explicacao: "A propriedade alpha controla a opacidade do objeto, variando de 0 (invisível) a 1 (totalmente visível)."
    },
    {
        categoria: "AS3",
        texto: "Qual propriedade é usada para alterar a posição horizontal de um objeto?",
        opcoes: ["y", "width", "left", "x"],
        correta: 3,
        explicacao: "A propriedade x define a posição horizontal do objeto no palco."
    },
    {
        categoria: "AS3",
        texto: "Qual comando remove um objeto da lista de exibição?",
        opcoes: ["deleteChild();", "remove();", "removeChild();", "destroy();"],
        correta: 2,
        explicacao: "A função removeChild(); remove um objeto previamente adicionado com addChild()."
    },
    {
        categoria: "AS3",
        texto: "Qual classe é normalmente usada para criar campos de texto em ActionScript 3?",
        opcoes: ["TextField", "Label", "TextBox", "InputField"],
        correta: 0,
        explicacao: "A classe TextField permite exibir e editar texto em aplicações Flash."
    },
    {
        categoria: "AS3",
        texto: "Qual evento é disparado quando uma tecla do teclado é pressionada?",
        opcoes: ["KeyboardEvent.KEY_DOWN", "KeyboardEvent.KEY_PRESS", "KeyboardEvent.DOWN", "KeyboardEvent.INPUT"],
        correta: 0,
        explicacao: "KeyboardEvent.KEY_DOWN ocorre quando o usuário pressiona uma tecla."
    }
]

/* ----- */

let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = [];

/* ----- */

const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroPergunta = document.getElementById("numero-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraFill = document.getElementById("barra-fill");
const categoriaBadge = document.getElementById("categoria-badge");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTexto = document.getElementById("feedback-texto");

/* ----- */

function mostrarTela(tela){
    document.querySelectorAll(".tela").forEach((t) => t.classList.remove("ativa"));
    tela.classList.add("ativa");
}

function carregarPergunta(){
    const pergunta = perguntas[indiceAtual];

    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.innerHTML = `,i class="fas fa-star"></i> ${pontos} pts`;
    barraFill.style.width = `${(indiceAtual / perguntas.length) * 100}%`;

    categoriaBadge.textContent = pergunta.categoria;
    textoPergunta.textContent = pergunta.texto;

    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido");
    btnProxima.classList.add("escondido");

    pergunta.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.innerHTML = `<span class="opcao-letra">${i + 1}</span> ${opcao}`;
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn);
    });
}

function responder(indiceEscolhido, btnClicado){
    const pergunta = perguntas[indiceAtual];
    const acertou = indiceEscolhido === pergunta.correta;

    document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
        btn.disabled = true;
        if(i === pergunta.correta) btn.classList.add("correta");
        if(i === indiceEscolhido && !acertou) btn.classList.add("errada");
    });

    if(acertou){
        pontos += 10;
        acertos++;
    }
    respostas.push({pergunta, escolhida: indiceEscolhido, acertou});

    feedback.classList.remove("escondido", "feedback-certo", "feedback-errado");
    if(acertou){
        feedback.classList.add("feedback-certo");
        feedbackIcone.innerHTML = "✅";
        feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`;
    }else{
        feedback.classList.add("feedback-errado");
        feedbackIcone.innerHTML = "❌";
        feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`;
    }

    btnProxima.classList.remove("escondido");

    if(indiceAtual === perguntas.length - 1){
        btnProxima.innerHTML = `Ver resultado <i class="fas fa-flag-checkered"></i>`;
    }else{
        btnProxima.innerHTML = `Próxima <i class="fas fa-arrow-right"></i>`;
    }
}

function proximaPergunta(){
    indiceAtual++;
    if(indiceAtual < perguntas.length){
        carregarPergunta();
    }else{
        mostrarResultado();
    }
}

function mostrarResultado(){
    mostrarTela(telaResultado);
    barraFill.style.width = "100%";

    const resultadoEmoji = document.getElementById("resultado-emoji");
    const resultadoTitulo = document.getElementById("resultado-titulo");
    const resultadoDescricao = document.getElementById("resultado-descricao");

    if(porcentagem === 100){

    }
}

function reiniciar(){

}