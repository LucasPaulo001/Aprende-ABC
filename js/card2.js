let personagem = document.getElementById('personagem');
let personagem02 = document.getElementById('personagem02');
const buttoms = document.querySelectorAll('.letra');
let person = localStorage.getItem('personagemLocal01') || 'assets/imagens/mascote(masc).png';
let person2 = localStorage.getItem('personagemLocal02') || 'assets/imagens/mascote(fem).png'

let localPerson1 = document.createElement('img')
localPerson1.src = person;
localPerson1.height = 200;
personagem.appendChild(localPerson1);

let localPerson02 = document.createElement('img');
localPerson02.src = person2;
localPerson02.height = 200;
personagem02.appendChild(localPerson02);

buttoms.forEach(function(buttom){
    buttom.addEventListener('click', () => {
        const som = buttom.getAttribute('data-som');
        
        const audio = new Audio(som);
        audio.play();
    })
})

