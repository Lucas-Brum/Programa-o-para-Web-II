function carregar(){
    
    var textoH1 = document.querySelector('h1')
    var botao = document.querySelector('button')

    botao.addEventListener('click', onclick)
    
    function onclick(){

        textoH1.innerHTML = "A mágica continua!"
    
    }
    
}