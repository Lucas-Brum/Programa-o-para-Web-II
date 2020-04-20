function flores(){
    
    var array = ['Anturio.jpg','Bromelia.jpg','Dente de leão.jpg',
                 'Flor da meia noite.jpg','Girassol.jpg','Lirio.jpg',
                 'Rosa.jpg','Tulipa.jpg','Flor de lis.jpg','Crisantemo.jpg']

    for (let i = 0; i <= 9; i++){

        let flor = document.createElement('img')
        flor.src = array[i]
        let lista = document.querySelector('#Lista')
        lista.appendChild(flor)

    }

}