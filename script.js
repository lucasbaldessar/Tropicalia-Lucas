document.addEventListener('DOMContentLoaded', function () {


   const botaoacessibilidade = document.grtElementByid('botao-acessibilidade');
   const opcoesDeAcessibilidade = document.grtElementByid(opcoes-acessibilidade);


      botaoDeAcessibilidade.addEventListener('click', function(){
      botaoDeAcessibilidade.classList.toggle('rotacao-botao')
      botaoDeAcessibilidade.classList.toggle('apresenta-lista')
})

   const aumentaFonteBotao = document.getElementById('aumentar-fonte');]
   const diminuiFonteBotao = document.getElementById('diminuir-fonte');

   let tamanhoAtualFonte = 1;

   aumentaFonteBotao.addEventListener('click', function () {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
   });

   diminuiFonteBotao.addEventListener('click', function () {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
   });


});