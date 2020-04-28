function verificarSenha(){

    let gabarito = [    
        true, false, false, false, false,
        false, true, false, false, false,
        false, false, true, false, false,
        false, false, false, true, false
]
    let corrige = document.getElementsByClassName('bordas')
    let verifica = document.getElementsByClassName('respostas')
    let pontos = 0
    let erros = []

    for(let i = 0; i < verifica.length; i++ ){
        if(verifica[i].checked == gabarito[i]){
            pontos++
        }
        else{
            erros.push(i)
        }
    }
    console.log(erros)
    if(pontos == 20){
        pontos = 0 
        return true
    }
    for(let i = 0; i < erros.length; i++){
        
        if(verifica[erros[i]].checked){
            console.log('entrou')
                corrige[erros[i]].style.border = "1px solid red"
        }
    }
    pontos = 0
    return false

}

