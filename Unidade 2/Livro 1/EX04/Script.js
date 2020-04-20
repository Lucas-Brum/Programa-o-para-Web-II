   
var array = ['Anturio','Bromelia','Dente de leão',
             'Flor da meia noite','Girassol','Lirio',
             'Rosa','Tulipa','Flor de lis','Crisantemo']

var botao  = document.querySelector('button')
var flor = document.createElement('img')
var erro = document.createElement('p')
var lista = document.querySelector('#Lista')
var achou = false

    

    botao.addEventListener('click', flores)

    erro.innerHTML = "Essa flor ainda n esta no meu catalogo"

function flores(){

    for (let i = 0; i <= 9; i++){

        if(document.querySelector('input').value.toLowerCase() == array[i].toLowerCase()){    
    
            achou = true
            flor.src = array[i]+'.jpg'
            
        }
    }
    lista.appendChild(flor)
    lista.appendChild(erro)
    if (achou == true){

            lista.appendChild(flor)
            lista.removeChild(erro)
    }
    else{

        lista.appendChild(erro)
        lista.removeChild(flor)
        

    }
    achou = false

}