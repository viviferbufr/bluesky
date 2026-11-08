/* Script JavaScript do projeto Blue Sky */

const pesquisa = document.getElementById("pesquisaTermo");
const botaoLimpar = document.getElementById("limparPesquisa");
const mensagemVazia = document.getElementById("mensagemVazia");

const itens = document.querySelectorAll(".item-pesquisa");
const grupos = document.querySelectorAll(".grupo-dicionario");
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
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
    grupos.forEach(function(grupo) {

        const itensDoGrupo = grupo.querySelectorAll(".item-pesquisa");

        const possuiResultado = Array.from(itensDoGrupo).some(function(item) {
            return !item.hidden;
        });

        grupo.hidden = !possuiResultado;

    });
    mensagemVazia.hidden = quantidadeEncontrada > 0;

}
pesquisa.addEventListener("input", pesquisarTermos);
botaoLimpar.addEventListener("click", function() {

    pesquisa.value = "";

    pesquisarTermos();

    pesquisa.focus();

});
