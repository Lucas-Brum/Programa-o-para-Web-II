const cresce = document.getElementsByName('aproxima')[0]
const encolhe = document.getElementsByName('afasta')[0]

let tamanho = 2 // 1-pequeno 2-medio 3-grande



cresce.addEventListener('click', aumenta)
encolhe.addEventListener('click', diminui)

function aumenta(){

   if(tamanho < 3 ){
       

        tamanho++

        if(tamanho == 2){

            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('pequena')[i].classList.add('media')

            }


            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('media')[i].classList.remove('pequena')
            }
        }
        else{

            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('media')[i].classList.add('grande')

            }


            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('grande')[i].classList.remove('media')
            }
        }
   }
}

function diminui(){
    if(tamanho > 1 ){
       

        tamanho--

        if(tamanho == 2){

            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('grande')[i].classList.add('media')

            }


            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('media')[i].classList.remove('grande')
            }
        }
        else{

            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('media')[i].classList.add('pequena')

            }


            for(let i = 0; i < 10; i++){

                document.getElementsByClassName('pequena')[i].classList.remove('media')
            }
        }
   }
}

