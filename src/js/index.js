/*
Objetivo - Clicar no botão e mostrar a imagem de fundo correspondente ao botão.

- passo 1 - Pegar o elemento HTML dos botões
- passo 2 - Identificar o click do usuário no botão
- passo 3 - Desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicado como se estivesse selecionada
- passo 5 - esconder a imagem anterior
- passo 6 - fazer parecer a imagem do botão clicado
*/


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    desativarBotãoSelecionado();

    selecionarBotaoCarrosel(botao);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  })
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotãoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
