/* Script JavaScript do projeto Blue Sky */

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

const imagem = document.getElementById("imagem");
const classificacao = document.getElementById("classificacao");
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");

const pontos = document.querySelectorAll(".ponto");

const conteudos = [

    {
        imagem: "img/mitos/hi.png",
        tipo: "Mito",
        pergunta: "Pele oleosa não precisa de hidratante.",
        resposta: "A pele oleosa também precisa de hidratação. O ideal é escolher produtos leves e adequados ao seu tipo de pele."
    },

    {
        imagem: "img/mitos/solar.jpg",
        tipo: "Verdade",
        pergunta: "O protetor solar deve ser usado diariamente.",
        resposta: "A proteção solar é importante todos os dias, inclusive quando está nublado. Ela ajuda a proteger a pele contra os danos da radiação UV."
    },

    {
        imagem: "img/mitos/acne.jpg",
        tipo: "Mito",
        pergunta: "Quanto mais produtos, melhor a rotina.",
        resposta: "Uma rotina eficiente não depende da quantidade de produtos, mas da escolha de cuidados adequados às necessidades da sua pele."
    },

    {
        imagem: "img/mitos/limpeza.jpg",
        tipo: "Verdade",
        pergunta: "A limpeza ajuda a manter a pele saudável.",
        resposta: "A limpeza adequada ajuda a remover impurezas, oleosidade e resíduos acumulados na pele."
    }

];

let atual = 0;

function mostrarConteudo() {

    imagem.src = conteudos[atual].imagem;
    imagem.alt = "Imagem ilustrativa: " + conteudos[atual].pergunta;

    pergunta.textContent = conteudos[atual].pergunta;

    resposta.textContent = conteudos[atual].resposta;

    classificacao.textContent =
        conteudos[atual].tipo === "Mito" ? "✖ Mito" : "✔ Verdade";

    classificacao.className =
        conteudos[atual].tipo === "Mito" ?
        "classificacao" : "classificacao verdade";

    pontos.forEach((ponto, indice) => {

        ponto.classList.toggle("ativo", indice === atual);
        ponto.setAttribute("aria-pressed", indice === atual ? "true" : "false");

    });

}




function proximo() {

    atual++;

    if (atual >= conteudos.length) {
        atual = 0;
    }

    mostrarConteudo();

}

function anterior() {

    atual--;

    if (atual < 0) {
        atual = conteudos.length - 1;
    }

    mostrarConteudo();

}


btnAnterior.addEventListener("click", anterior);

btnProximo.addEventListener("click", proximo);

pontos.forEach((ponto, indice) => {

    ponto.addEventListener("click", function() {

        atual = indice;

        mostrarConteudo();

    });

});
