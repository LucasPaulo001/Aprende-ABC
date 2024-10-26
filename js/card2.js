let personagem = document.getElementById('personagem');
const buttoms = document.querySelectorAll('.letra');
let person = localStorage.getItem('personagem') || 'assets/imagens/mascote(masc).png';

let localPerson = document.createElement('img')
localPerson.src = person;
localPerson.height = 200;
personagem.appendChild(localPerson);

buttoms.forEach(function(buttom){
    buttom.addEventListener('click', () => {
        const som = buttom.getAttribute('data-som');
        
        const audio = new Audio(som);
        audio.play();
    })
})

