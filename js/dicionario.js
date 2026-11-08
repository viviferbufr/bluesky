
const pesquisa = document.getElementById("pesquisaTermo");
const botaoLimpar = document.getElementById("limparPesquisa");
const mensagemVazia = document.getElementById("mensagemVazia");

const itens = document.querySelectorAll(".item-pesquisa");
const grupos = document.querySelectorAll(".grupo-dicionario");

// Remove acentos e transforma o texto em minúsculo
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Pesquisa os termos
function pesquisarTermos() {

    const textoPesquisa = normalizarTexto(pesquisa.value.trim());

    let quantidadeEncontrada = 0;

    itens.forEach(function(item) {

        const textoCard = normalizarTexto(item.textContent);

        const encontrou = textoCard.includes(textoPesquisa);

        item.hidden = !encontrou;

        if (encontrou) {
            quantidadeEncontrada++;
        }

    });

    // Esconde as categorias que não possuem resultados
    grupos.forEach(function(grupo) {

        const itensDoGrupo = grupo.querySelectorAll(".item-pesquisa");

        const possuiResultado = Array.from(itensDoGrupo).some(function(item) {
            return !item.hidden;
        });

        grupo.hidden = !possuiResultado;

    });

    // Mostra mensagem quando não encontra nada
    mensagemVazia.hidden = quantidadeEncontrada > 0;

}

// Pesquisa enquanto o usuário digita
pesquisa.addEventListener("input", pesquisarTermos);

// Limpa a pesquisa
botaoLimpar.addEventListener("click", function() {

    pesquisa.value = "";

    pesquisarTermos();

    pesquisa.focus();

});
