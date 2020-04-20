var botao = document.querySelector('button')
document.querySelector('#Circulo').style.display = "none"
document.querySelector('#Quadrado').style.display = "none"
document.querySelector('#Triangulo').style.display = "none"
botao.addEventListener('click', clicar)

function clicar(){

   switch (document.querySelector('input').value.toLowerCase()){
        case 'circulo':
            document.querySelector('#Circulo').style.display = ""
            document.querySelector('#Interrogacao').style.display = "none"
            document.querySelector('#Triangulo').style.display = "none"
            document.querySelector('#Quadrado').style.display = "none"
            document.querySelector('p').innerHTML = ""
           break
        case 'triangulo':
            document.querySelector('#Triangulo').style.display = ""
            document.querySelector('#Interrogacao').style.display = "none"
            document.querySelector('#Circulo').style.display = "none"
            document.querySelector('#Quadrado').style.display = "none"
            document.querySelector('p').innerHTML = ""
            break
        case 'quadrado':
            document.querySelector('#Quadrado').style.display = ""
            document.querySelector('#Interrogacao').style.display = "none"
            document.querySelector('#Circulo').style.display = "none"
            document.querySelector('#Triangulo').style.display = "none"
            document.querySelector('p').innerHTML = ""
            break
        default:
            document.querySelector('#Interrogacao').style.display = ""
            document.querySelector('#Circulo').style.display = "none"
            document.querySelector('#Triangulo').style.display = "none"
            document.querySelector('#Quadrado').style.display = "none"
            document.querySelector('p').innerHTML = " Forma geometrica invalida!"
            document.querySelector('p').style.marginLeft = "50px"
    }
        


}