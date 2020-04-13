var coracao = document.querySelector('#coracao')
var estrela = document.querySelector('#estrela')
var flor = document.querySelector('#flor')
var gigante = document.querySelector('#gigante')

var criarImg = document.createElement('img')



flor.addEventListener('click', Flor)
estrela.addEventListener('click', Estrela)
coracao.addEventListener('click', Coracao)


function Flor(){
    
    criarImg.setAttribute('src','flor.jpg')
    criarImg.setAttribute('height','500')
    criarImg.setAttribute('width','500')
    gigante.appendChild(criarImg)

}

function Estrela(){

    criarImg.setAttribute('src','estrela.jpg')
    criarImg.setAttribute('height','500')
    criarImg.setAttribute('width','500')
    gigante.appendChild(criarImg)

}

function Coracao(){

    criarImg.setAttribute('src','coração.jpg')
    criarImg.setAttribute('height','500')
    criarImg.setAttribute('width','500')
    gigante.appendChild(criarImg)

}