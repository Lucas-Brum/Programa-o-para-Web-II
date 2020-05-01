function gabarito(){

    let gabarito = [    
        true, false, false, false, false,
        false, false, false, false, true,
        false, false, true, false, false,
        false, false, true, true, false
    ]

    let corrige = document.getElementsByClassName('bordas')
    let verifica = document.getElementsByClassName('respostas')
    let multiplaEscolha = document.getElementsByClassName('multiplaEscolha')
    let aviso = document.getElementById('Aviso')


    let pontos = 0
    let erros = []
    let requireMultiplaEscolha = false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0; i < verifica.length; i++ ){
        if(verifica[i].checked == gabarito[i]){
            pontos++
        }
        else{
            erros.push(i)
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for(let i = 0; i<multiplaEscolha.length; i++){

        if(multiplaEscolha[i].checked){

            aviso.innerHTML = ""// apaga a correção
            requireMultiplaEscolha = true  // marca que foi malcado alguma pelomenos
            break // sai do for
        }
        else{

            aviso.innerHTML = "Escolha ao menos uma opção"
            aviso.style.background='red'
        }
}
    for(let i = 0; i<multiplaEscolha.length; i++){

        corrige[i+15].style.border = ''    
    }
if(requireMultiplaEscolha){

    for(let i = 0; i<multiplaEscolha.length; i++){

        if(multiplaEscolha[i].checked != gabarito[i+15] && gabarito[i+15] == false){
            console.log('entrou')
            corrige[i+15].style.border = '1px solid red'
        }
        else{

            if(multiplaEscolha[i].checked == gabarito[i+15]){
                pontos++
            }
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    corrige[20].style.border = ''

    let resposta = "JavaScript é usado para a interação frontend web"

    let dissertativa = document.getElementById("dissertativa").value;

    if (dissertativa == resposta) {
        pontos++
    }
    else{
        corrige[20].style.border = '1px solid red'
    }


























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(pontos == 21){

        pontos = 0 
        return true
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0; i < verifica.length; i++){

        corrige[i].style.border = ''

    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0; i < erros.length; i++){
        
        if(verifica[erros[i]].checked){

            corrige[erros[i]].style.border = '1px solid red'

        }
    }
    console.log(pontos)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    pontos = 0
    return false

}

