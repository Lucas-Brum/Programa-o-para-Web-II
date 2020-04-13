var imagem = document.querySelector('img')
var botao = document.querySelector('button')

botao.addEventListener('click', trocarImagem)

function trocarImagem(){
   console.log('Imagem trocada com sucesso')
   imagem.src = 'Adolecente.jpg'
}