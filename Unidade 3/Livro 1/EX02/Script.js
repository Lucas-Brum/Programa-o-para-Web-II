let botao = document.querySelector('button')
let lista = document.getElementsByClassName('lista')
let anotacao = document.querySelector('ol')
let novoItem

botao.addEventListener('click', Lista)

function Lista(){
    for(let i =0; i<lista.length; i++){
        if(lista[i].value!=''){
            novoItem = document.createElement('li')
            novoItem.innerHTML = lista[i].value
            lista[i].value=''
            anotacao.appendChild(novoItem)
    }
    }

}