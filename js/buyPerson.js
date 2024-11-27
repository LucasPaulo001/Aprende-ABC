const buy = document.getElementById('buy');
const value = 1; // O valor do mascote
let mascoteMasc = document.getElementById('mascMasc');
let mascoteFem = document.getElementById('mascFem');
let valorDisponivel = localStorage.getItem('score')||0;
let scoreV = document.getElementById('scoreCamp'); 
let situationBuy = document.getElementById('situation');
let situationBuy2 = document.getElementById('situation2');


// Inicializa o mascote do localStorage, ou um padrão
let person01 = localStorage.getItem('personagemLocal01') || 'assets/imagens/mascote(masc).png';
let person02 = localStorage.getItem('personagemLocal02') || 'assets/imagens/mascote(fem).png';

// Inserindo o mascote do lado direito
let newMascote = document.createElement('img');
newMascote.src = person01;
newMascote.height = 400;
mascoteMasc.appendChild(newMascote);

// Inserindo o mascote do lado esquerdo
let newMascote2 = document.createElement('img');
newMascote2.src = person02;
newMascote2.height = 400;
mascoteFem.appendChild(newMascote2);

//objeto para os personagens

const lojaPersons = [
    {
        nome: "Saltito",
        imagem: "assets/imagens/giphy.gif",
        habilidade: "Fala a dica em voz alta se interagir com ele",
        preco: 10
    },
    {
        nome: "Sabichão",
        imagem: "assets/imagens/person_2.gif",
        habilidade: "Fala curiosidades sobre objetos",
        preco: 20
    },
]
localLoja()
function localLoja(){
    const localPersons = document.getElementById('contentPerson')
    lojaPersons.map((elements, index) => {
        // Criar o card de cada personagem
        const card = document.createElement("div");
        card.classList.add("personagem");

        const caracter = document.createElement('div')
        caracter.setAttribute('class','caracter')

        // Nome
        const nome = document.createElement("h2");
        nome.textContent = elements.nome;

        // Imagem
        const localImagem = document.createElement('div')//div que armazenará a imagem
        const imagem = document.createElement("img");
        imagem.src = elements.imagem;
        imagem.alt = elements.nome;
        localImagem.setAttribute('class', 'imgPerson')
        localImagem.appendChild(imagem)

        // Habilidade
        const habilidade = document.createElement("p");
        habilidade.textContent = `Habilidade: ${elements.habilidade}`;

        // Preço
        const preco = document.createElement("p");
        preco.setAttribute('class', 'valor')
        preco.textContent = `Preço: ${elements.preco} moedas`;

        //botão de compra
        const localBtn = document.createElement('div')
        const btnBuy = document.createElement('button')
        btnBuy.setAttribute('class', 'buy')
        btnBuy.setAttribute('id', `btn${index}`)
        btnBuy.textContent = 'Comprar'
        localBtn.appendChild(btnBuy)

        // Adiciona tudo ao card
        caracter.appendChild(nome);
        caracter.appendChild(localImagem);
        caracter.appendChild(habilidade);
        caracter.appendChild(preco);
        caracter.appendChild(localBtn)
        card.appendChild(caracter)

        // Adiciona o card à loja
        localPersons.appendChild(card);

    })
}

//Funcionalidade de comprar o personagem
let buttonsBuy = [...document.getElementsByClassName('buy')]
buttonsBuy.forEach((buttom) => {
    buttom.addEventListener('click', (btn) => {
        if(btn.target.id === 'btn0'){
            console.log('comprou o personagem "Saltito"')
        }
        if(btn.target.id === 'btn1'){
            console.log('comprou o personagem "Sabichão"')
        }
    })
})


console.log(buttonsBuy)