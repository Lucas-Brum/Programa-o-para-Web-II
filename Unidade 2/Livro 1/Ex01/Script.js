var botao = document.querySelector('button')
var resposta = document.querySelector('input')

botao.addEventListener('click', clicar)

function clicar(){
    if(resposta.value == "circulo" || resposta.value == "Circulo"){

        document.querySelector('p').innerHTML = "Acertou!"
        document.querySelector('p').style.marginLeft = '115px'
        document.querySelector('p').style.color = 'green' 

    }
    else{

        document.querySelector('p').innerHTML = "Reposta incorreta tente novamente..."
        document.querySelector('p').style.marginLeft = '30px'
        document.querySelector('p').style.color = 'red'

    }
}