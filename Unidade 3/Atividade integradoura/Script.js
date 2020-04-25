var questao1 = document.querySelector('#Enviar')

document.addEventListener('submit', Gabarito)

function Gabarito() {
    var questao1 = document.getElementsByName("questao1")
    for(var i = 0; i < 4; i++){
        if(questao1[i].checked== true){
            console.log(true)
        }
    }
    
}

