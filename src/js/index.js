/*
Objetivo - Clicar no botão e mostrar a imagem de fundo correspondente ao botão.

- passo 1 - Pegar o elemento HTML dos botões
- passo 2 - Identificar o click do usuário no botão
- passo 3 - Desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicado como se estivesse selecionada
- passo 5 - esconder a imagem anterior
- passo 6 - fazer parecer a imagem do botão clicado
*/

//1
const botoesCarrossel = document.querySelectorAll('.botao');

//2
botoesCarrossel.forEach((botao) => {
  botao.addEventListener('click', () => {
//3
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
//4
    
  })
});