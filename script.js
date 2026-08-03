
const artigos = document.querySelectorAll("article");
artigos.forEach(function (artigo) {
    const botoes = artigo.querySelectorAll("button");

    botoes.forEach(function (botao) {
        let curtiu = false; 
        botao.addEventListener("click", function () {
            let contador = botao.querySelector("span");
            let valorAtual = parseInt(contador.textContent);

            if (curtiu === false) {
                contador.textContent = valorAtual + 1;
                curtiu = true;
                botao.style.background = "#e0e0e0";
            } else {
                contador.textContent = valorAtual - 1;
                curtiu = false;
                botao.style.background = ""; 
            }
        });
    });
});
