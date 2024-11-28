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
        id: 0,
        comprado: false,
        preco: 10
    },
    {
        nome: "Sabichão",
        imagem: "assets/imagens/person_2.gif",
        habilidade: "Fala curiosidades sobre objetos",
        id: 1,
        comprado: false,
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

        //Botão de comprar
        const btnBuy = document.createElement('button')
        btnBuy.setAttribute('class', 'buy buyPerson')
        btnBuy.textContent = 'Comprar'

        //Funcionalidade do botão de compra
        btnBuy.addEventListener('click', () => { 
            comprarPersonagem(elements, index)
        })

        // Adiciona tudo ao card
        caracter.appendChild(nome);
        caracter.appendChild(localImagem);
        caracter.appendChild(habilidade);
        caracter.appendChild(preco);
        caracter.appendChild(btnBuy)
        card.appendChild(caracter)

        // Adiciona o card à loja
        localPersons.appendChild(card);

    })
}
let coins = document.getElementById('coins')
//enviando a quantidade de moedas do localStorage para a tela do usuário na loja
coins.innerHTML = `Você possui ${Number(localStorage.getItem('score'))} moedas`
//Recebendo o valor no localStorage
let processBuy = Number(localStorage.getItem('score'))
//Função para comprar personagem
function comprarPersonagem(elements, index){
    if(index == elements.id && processBuy >= elements.preco){
        console.log('Você comprou o personagem ' + elements.nome)
        processBuy=processBuy-elements.preco
        localStorage.setItem('score', processBuy)
        coins.innerHTML = `Você possui ${Number(localStorage.getItem('score'))} moedas`
        console.log(elements.comprado)
        if(index = 0 && elements.comprado == false){
            elements.comprado = true
        }
        if(index = 1 && elements.comprado == false){
            elements.comprado = true
        }
        console.log(processBuy)
    }
    else{
        console.log('Você não tem moedas suficientes')
    }
    console.log(typeof(processBuy))
}













// // Adiciona os eventos de clique para os botões de personagem fora da função LocalPersonagem
// document.getElementById('btn-person-local01').addEventListener('click', () => {
//     if (valorDisponivel >= value) {
//         if(localStorage.getItem('SituaçãoPersonagem01') == 'comprado!'){
//             valorDisponivel-=0;
//         }
//         else{
//             valorDisponivel -= value; // Reduz o valor da compra
//         }
//         person01 = 'assets/imagens/giphy.gif'; // Novo mascote
//         localStorage.setItem('personagemLocal01', person01);
//         newMascote.src = person01; // Atualiza a imagem exibida
//         newMascote.height = 300; // Altera a altura da nova imagem

//         // Atualiza o valor disponível e a situação do personagem
//         localStorage.setItem('score', valorDisponivel);
//         scoreV.innerHTML = valorDisponivel;
//         localStorage.setItem('SituaçãoPersonagem01', 'comprado!');
//         situationBuy.innerHTML = 'comprado!';
//     } else {
//         alert("Você não tem moedas suficientes!");
//     }
// });

// document.getElementById('btn-person-local02').addEventListener('click', () => {
//     if (valorDisponivel >= value) {
//         if(localStorage.getItem('SituaçãoPersonagem02') == 'comprado!'){
//             valorDisponivel -= 0; 
//         }
//         else{
//             valorDisponivel -= value; // Reduz o valor da compra
//         }
//         person02 = 'assets/imagens/person_2.gif'; // Novo mascote
//         localStorage.setItem('personagemLocal02', person02);
//         newMascote2.src = person02; // Atualiza a imagem exibida
//         newMascote2.height = 300; // Altera a altura da nova imagem

//         // Atualiza o valor disponível e a situação do personagem
//         localStorage.setItem('score', valorDisponivel);
//         scoreV.innerHTML = valorDisponivel;
//         localStorage.setItem('SituaçãoPersonagem02', 'comprado!');
//         situationBuy2.innerHTML = 'comprado!';
//     } else {
//         alert("Você não tem moedas suficientes!");
//     }
// });
