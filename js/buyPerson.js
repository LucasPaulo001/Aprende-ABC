const buy = document.getElementById('buy');
const value = 1; // O valor do mascote
let mascoteMasc = document.getElementById('mascMasc');
let valorDisponivel = localStorage.getItem('score'); // Você pode pegar isso do localStorage mais tarde
let scoreV = document.getElementById('scoreCamp');
let situationBuy = document.getElementById('situation');


// Inicializa o mascote
let person = localStorage.getItem('personagem') || 'assets/imagens/mascote(masc).png'; // Pega o mascote do localStorage, ou um padrão
let newMascote = document.createElement('img');
newMascote.src = person;
newMascote.height = 400;
mascoteMasc.appendChild(newMascote);

//Variável que recebe o status de comprado ou não no localstorage
let situation = localStorage.getItem('SituaçãoPersonagem01');

//Variável de situação se inicia como "não possui";
let valueSituation = "Não Possui";

// Atualiza a pontuação disponível no início
scoreV.innerHTML = valorDisponivel;

if(situation==='Não Possui'){
    situationBuy.style.backgroundColor = 'red';
}

buy.addEventListener('click', () => {
    if (valorDisponivel >= value) {
        valorDisponivel -= value; // Reduz o valor da compra
        
        // Atualiza o mascote
        person = 'assets/imagens/giphy.gif'; // Novo mascote
        localStorage.setItem('personagem', person); // Salva no localStorage
        newMascote.src = localStorage.getItem('personagem'); // Atualiza a imagem exibida
        newMascote.height = 300; // Altera a altura da nova imagem
        
        // Atualiza o valor disponível no localStorage
        localStorage.setItem('score', valorDisponivel);
        scoreV.innerHTML = valorDisponivel; // Atualiza a pontuação na tela
        valueSituation='comprado!'
        localStorage.setItem('SituaçãoPersonagem01', valueSituation);

    } else {
        alert("Você não tem moedas suficientes!");
    }
});
situationBuy.innerHTML = situation;




