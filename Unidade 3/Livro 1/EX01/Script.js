let livro = []
let pagina = []

for(let i = 0; i< document.getElementsByClassName("Livro").length; i++){
    livro.push(document.getElementsByClassName("Livro")[i])
    pagina.push(document.getElementsByClassName("Pagina")[i])
}

livro[0].addEventListener('click', Livros)
livro[1].addEventListener('click', Livros)
livro[2].addEventListener('click', Livros)
livro[3].addEventListener('click', Livros)
livro[4].addEventListener('click', Livros)
livro[5].addEventListener('click', Livros)

pagina[0].addEventListener('click', Paginas)
pagina[1].addEventListener('click', Paginas)
pagina[2].addEventListener('click', Paginas)
pagina[3].addEventListener('click', Paginas)
pagina[4].addEventListener('click', Paginas)
pagina[5].addEventListener('click', Paginas)

function Livros(){
    for(let i = 0; i< document.getElementsByClassName("Livro").length; i++){
        document.getElementsByClassName("Livro")[i].style.background='blue'
        document.getElementsByClassName("Pagina")[i].style.background='' 
    }
}
function Paginas(){
    for(let i = 0; i< document.getElementsByClassName("Pagina").length; i++){
        document.getElementsByClassName("Livro")[i].style.background=''
        document.getElementsByClassName("Pagina")[i].style.background='green'
    }
}