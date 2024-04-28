const BtnOrdenarPorPreço = document.getElementById('btnOrdenarPorPreco');

BtnOrdenarPorPreço.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);

};