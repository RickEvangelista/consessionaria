const botaoEncomenda = document.querySelector(".botao-encomenda");
const orientacoesEncomenda = document.querySelector(".orientacoes-encomenda");

botaoEncomenda.addEventListener("click", function () {
    orientacoesEncomenda.classList.toggle("oculto");

    if (orientacoesEncomenda.classList.contains("oculto")) {
        botaoEncomenda.textContent = "Solicitar encomenda";
    } else {
        botaoEncomenda.textContent = "Ocultar orientações";
    }
});

const cardsDestaque = document.querySelectorAll(".card-interativo");
const mensagemDestaque = document.querySelector("#mensagem-destaque");
const mensagemOriginal = "Clique em um dos destaques para ver uma sugestão de consumo.";
let produtoAtual = null;

function voltarMensagemOriginal() {
    mensagemDestaque.textContent = messageOriginal;
    produtoAtual = null;
}

function mostrarMensagem(produto) {
    if (produto === "pao") {
        mensagemDestaque.textContent = "O pão rústico de fermentação natural é ideal para quem aprecia casca crocante, miolo macio e sabor mais intenso.";
    }
    if (produto === "croissant") {
        mensagemDestaque.textContent = "O croissant amanteigado combina muito bem com café coado ou cappuccino, especialmente em um lanche da tarde.";
    }
    if (produto === "bolo") {
        mensagemDestaque.textContent = "O bolo caseiro de laranja é uma opção afetiva e simples, adequada para compartilhar em momentos de pausa.";
    }
    if (produto === "cafe") {
        mensagemDestaque.textContent = "O café coado especial valoriza aroma, equilíbrio e preparo cuidadoso, combinando com os principais itens da vitrine.";
    }
}

cardsDestaque.forEach(function(card) {
    card.addEventListener("click", function(evento) {
        evento.stopPropagation();
        const produtoSelecionado = card.dataset.produto;

        if (produtoSelecionado === produtoAtual) {
            voltarMensagemOriginal();
            return;
        }

        mostrarMensagem(produtoSelecionado);
        produtoAtual = produtoSelecionado;
    });
});

document.addEventListener("click", function() {
    voltarMensagemOriginal();
});
