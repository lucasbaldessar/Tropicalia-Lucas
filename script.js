document.addEventListener('DOMContentLoaded', function(){
   const aumentaFonteBotao = document.getElementById('aumentar-fonte');

   let tamnhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function(){
    tamnhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamnhoAtualFonte}rem`;
});
};
