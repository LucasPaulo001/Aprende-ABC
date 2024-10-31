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

// Inicializa o estado dos personagens
let situation = localStorage.getItem('SituaçãoPersonagem01') || 'Não Possui';
let situation02 = localStorage.getItem('SituaçãoPersonagem02') || 'Não Possui';

situationBuy.innerHTML = situation;
situationBuy2.innerHTML = situation;

// Atualiza a pontuação disponível no início
scoreV.innerHTML = valorDisponivel;

// Verifica se o personagem foi comprado
if (situation === 'Não Possui') {
    situationBuy.style.backgroundColor = 'red';
}

// Adiciona os eventos de clique para os botões de personagem fora da função LocalPersonagem
document.getElementById('btn-person-local01').addEventListener('click', () => {
    if (valorDisponivel >= value) {
        if(localStorage.getItem('SituaçãoPersonagem01') == 'comprado!'){
            valorDisponivel-=0;
        }
        else{
            valorDisponivel -= value; // Reduz o valor da compra
        }
        person01 = 'assets/imagens/giphy.gif'; // Novo mascote
        localStorage.setItem('personagemLocal01', person01);
        newMascote.src = person01; // Atualiza a imagem exibida
        newMascote.height = 300; // Altera a altura da nova imagem

        // Atualiza o valor disponível e a situação do personagem
        localStorage.setItem('score', valorDisponivel);
        scoreV.innerHTML = valorDisponivel;
        localStorage.setItem('SituaçãoPersonagem01', 'comprado!');
        situationBuy.innerHTML = 'comprado!';
    } else {
        alert("Você não tem moedas suficientes!");
    }
});

document.getElementById('btn-person-local02').addEventListener('click', () => {
    if (valorDisponivel >= value) {
        if(localStorage.getItem('SituaçãoPersonagem02') == 'comprado!'){
            valorDisponivel -= 0; 
        }
        else{
            valorDisponivel -= value; // Reduz o valor da compra
        }
        person02 = 'assets/imagens/person_2.gif'; // Novo mascote
        localStorage.setItem('personagemLocal02', person02);
        newMascote2.src = person02; // Atualiza a imagem exibida
        newMascote2.height = 300; // Altera a altura da nova imagem

        // Atualiza o valor disponível e a situação do personagem
        localStorage.setItem('score', valorDisponivel);
        scoreV.innerHTML = valorDisponivel;
        localStorage.setItem('SituaçãoPersonagem02', 'comprado!');
        situationBuy2.innerHTML = 'comprado!';
    } else {
        alert("Você não tem moedas suficientes!");
    }
});
