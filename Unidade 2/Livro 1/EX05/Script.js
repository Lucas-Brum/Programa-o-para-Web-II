var tabela
var painel = document.querySelector('div')
var grande 
function flores(){
    
    var array = ['Anturio.jpg','Bromelia.jpg','Dente de leão.jpg',
                 'Flor da meia noite.jpg','Girassol.jpg','Lirio.jpg',
                 'Rosa.jpg','Tulipa.jpg','Flor de lis.jpg','Crisantemo.jpg']

    var flor = []

    for (let i = 0; i <= 9; i++){

        flor[i] = document.createElement('img')
        flor[i].src = array[i]
        flor[i].id = 'flor' + i
        let lista = document.querySelector('#Lista')
        lista.appendChild(flor[i])

    }

    return flor

}

tabela = flores() 



    tabela[0].addEventListener('click', clicar0)
    tabela[1].addEventListener('click', clicar1)
    tabela[2].addEventListener('click', clicar2)
    tabela[3].addEventListener('click', clicar3)
    tabela[4].addEventListener('click', clicar4)
    tabela[5].addEventListener('click', clicar5)
    tabela[6].addEventListener('click', clicar6)
    tabela[7].addEventListener('click', clicar7)
    tabela[8].addEventListener('click', clicar8)
    tabela[9].addEventListener('click', clicar9)

grande = document.createElement('img')

grande.id = "Grande"

function clicar0(){
    painel.appendChild(grande)
    grande.src = 'Anturio.jpg'
}
function clicar1(){
    painel.appendChild(grande)
    grande.src = 'Bromelia.jpg'
}
function clicar2(){
    painel.appendChild(grande)
    grande.src = 'Dente de leão.jpg'
}
function clicar3(){
    painel.appendChild(grande)
    grande.src = 'Flor da meia noite.jpg'
}
function clicar4(){
    painel.appendChild(grande)
    grande.src = 'Girassol.jpg'
}
function clicar5(){
    painel.appendChild(grande)
    grande.src = 'Lirio.jpg'
}
function clicar6(){
    painel.appendChild(grande)
    grande.src = 'Rosa.jpg'
}
function clicar7(){
    painel.appendChild(grande)
    grande.src = 'Tulipa.jpg'
}
function clicar8(){
    painel.appendChild(grande)
    grande.src = 'Flor de lis.jpg'
}
function clicar9(){
    painel.appendChild(grande)
    grande.src = 'Crisantemo.jpg'
}
