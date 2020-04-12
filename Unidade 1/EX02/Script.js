function carregar(){
    var paragrafo = document.querySelector('p')
    
    paragrafo.addEventListener('click', onclick)

    function onclick(){

        paragrafo.style.color = 'green'

    }
}