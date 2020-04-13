var imagem = document.querySelector('img')
var pequeno = document.querySelector('#pequena')
var medio = document.querySelector('#media')
var grande = document.querySelector('#grande')

pequeno.addEventListener('click', Pequeno)
medio.addEventListener('click', Medio)
grande.addEventListener('click', Grande)

function Pequeno(){

    imagem.width = '100'
    imagem.height = '100'

}

function Medio(){

    imagem.width = '300'
    imagem.height = '300'
   

}

function Grande(){

    imagem.width = '500'
    imagem.height = '500'
   

}