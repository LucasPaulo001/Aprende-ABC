const timer = document.getElementById('time');
let LocalTimer = document.getElementById('timer');
const btnOpenGame = document.getElementById('open-game');
const restartTimer = document.getElementById('fechar');

let valorTime; // Variável global para armazenar o tempo
let timeLapse; // Identificador do setInterval

// Função para adicionar a quantidade do tempo que o jogo terá
function addTimer() {
    console.log(timer.value);
    localStorage.setItem('ValorTempo', timer.value);

    //Funcionalidades do status de adição de tempo
    const statusAdd = document.getElementById('statusAdd')
    statusAdd.innerHTML = '<h3>Tempo adicionado!</h3>' //Mensagem de adição de tempo
    setTimeout(() => {
        statusAdd.innerHTML = '' //Remoção da mensagem
    }, 2000)
    
}

// Recupera o tempo armazenado no localStorage
function recuperarTempo() {
    valorTime = parseInt(localStorage.getItem('ValorTempo')) || 0;
    LocalTimer.innerText = `Tempo: ${valorTime}`;
}

// Função que decrementa o cronômetro
function Timer(value) {
    // Garante que nenhum outro timer está rodando
    clearInterval(timeLapse);

    let timeLeft = value; // Tempo atual
    LocalTimer.innerText = `Tempo: ${timeLeft}`;
    LocalTimer.style.color = 'white'

    // Inicia o cronômetro
    timeLapse = setInterval(() => {
        timeLeft--;
        LocalTimer.innerText = `Tempo: ${timeLeft}`;
        if(timeLeft<=5){
            LocalTimer.style.color='red'
        }
        
        if (timeLeft < 0) {
            LocalTimer.innerHTML = '<h3>Tempo esgotado</h3>';
            clearInterval(timeLapse); // Para o cronômetro
        }
    }, 1000);
}

// Evento para iniciar o cronômetro ao abrir o jogo
btnOpenGame.addEventListener('click', () => {
    recuperarTempo(); // Recupera o tempo inicial
    Timer(valorTime); // Inicia o cronômetro
});

// Evento para reiniciar o cronômetro ao fechar o modal
restartTimer.addEventListener('click', () => {
    clearInterval(timeLapse); // Para o cronômetro atual
    recuperarTempo(); // Reseta o tempo para o valor inicial
});


