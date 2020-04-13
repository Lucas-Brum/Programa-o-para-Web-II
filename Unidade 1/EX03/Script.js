


var paragrafo = document.querySelector('p')
var apagar = document.querySelector('#apagar')
var mostrar = document.querySelector('#mostrar')
    
apagar.addEventListener('click', Apagar)
mostrar.addEventListener('click', Mostrar)

function Apagar(){

    paragrafo.style.display = 'none'

}

function Mostrar(){

    paragrafo.style.display = ''

}
