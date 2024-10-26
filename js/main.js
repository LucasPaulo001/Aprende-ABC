// Arrays com as palavras e dicas
let palavras = ['BOLA', 'GATO', 'CACHORRO', 'CARRO', 'LIVRO', 'SOL', 'CASA'];
let dicas = ['É um brinquedo', 'É um animal de estimação', 'É o melhor amigo do homem', 'Esse é um veículo com quatro rodas que usamos para viajar ou ir de um lugar a outro.', 'É cheio de páginas, você lê e aprende coisas novas com ele!', 'Brilha no céu e nos aquece durante o dia.', 'É onde você mora e vive com sua família.'];

let voicePerson = ['assets/audio/personVoice/Voz(É um brinquedo).mp3', 'assets/audio/personVoice/Voz(É um animal de estimação).mp3', 'assets/audio/personVoice/Voz(É o melhor amigo do homem).mp3', 'assets/audio/personVoice/Voz(veículo).mp3', 'assets/audio/personVoice/voz(livro).mp3','assets/audio/personVoice/voz(sol).mp3', 'assets/audio/personVoice/voz(casa).mp3'];

let images = ['assets/imagens/obj_imagens/bola.png', 'assets/imagens/obj_imagens/gato.png', 'assets/imagens/obj_imagens/cachorro.png', 'assets/imagens/obj_imagens/carro.png', 'assets/imagens/obj_imagens/livro.png', 'assets/imagens/obj_imagens/sol.png', 'assets/imagens/obj_imagens/casa.png'];



let indiceAtual = 0;
let cont = 0;
let resp = [];
let dicaMasc = document.getElementById('dicaMasc');
let dicaFem = document.getElementById('dicaFem');
let letrasContainer = document.getElementById('resp');
const coin = document.getElementById('coin');
let score = 0;

//Inserção da imagem do objeto
let icon = document.getElementById('icon');
let campoImg = document.createElement('img');

//pegar a div onde o personagem está, para inserir o áudio
const dicaEmAudio = document.getElementById('personagem');

mostrarProximaPalavra(); // Exibe a primeira palavra ao carregar o jogo

function mostrarProximaPalavra() {
    let quantImg = 0;
    if (indiceAtual < palavras.length) {
        quantImg+=1;
        let palavraAtual = palavras[indiceAtual]; // Pega a palavra atual do array
        let dicaAtual = dicas[indiceAtual]; // Pega a dica correspondente
        let voiceAtual = voicePerson[indiceAtual];
        
        if(quantImg==1){
            let imageAtual = images[indiceAtual];// Pega a imagem correspondente
            campoImg.src = imageAtual;
            campoImg.width = 90;
            campoImg.height = 90;
            icon.appendChild(campoImg);
            
        }
        
        // Atualiza a dica no HTML
        dicaMasc.innerHTML = dicaAtual;
        dicaMasc.style.display = 'flex';

        // Limpa as letras anteriores e reinicia contador
        letrasContainer.innerHTML = '';
        cont = 0;
        resp = [];

        // Gera spans com underline para cada letra da palavra
        for (let i = 0; i < palavraAtual.length; i++) {
            var span = document.createElement('span');
            span.id = 'letra' + i;
            span.innerHTML = '_ ';
            letrasContainer.appendChild(span);
            resp.push(span); // Armazena os spans de resposta
        }
    } 
    else {
        // Mensagem de finalização
        dicaFem.innerHTML = 'Você completou todas as palavras! Parabéns!';
        dicaFem.style.display = 'flex';

    }
}
//Evento que aciona a voz do personagem com a dica
if(localStorage.getItem('personagem')){
    let quantAud = 0;
    dicaEmAudio.addEventListener('mouseenter', ()=>{
    if(quantAud) clearTimeout(quantAud);
    //o setTimeout reinicia o áudio para que não sobreponha se a outro
    quantAud = setTimeout( ()=>{let voz = new Audio(voicePerson[indiceAtual]);
        voz.play();
        console.log(voz);
        console.log(quantAud);
    }, 200)
});

}
// Função para iniciar a música ao iniciar o jogo
var musicMain = null;
function musicGame() {
    if(!musicMain){
        musicMain = new Audio('assets/audio/music_main.mp3');
        musicMain.volume
    }
    musicMain.play();
    
}
// Função para pausar a música
function stopMusic(){
    if (musicMain) {
        musicMain.pause();        // Pausa a música
        musicMain.currentTime = 0; // Reseta a música para o início
    }
}

// Função para inserir a letra digitada
function insert(digit) {
    if (cont < resp.length) {
        resp[cont].innerHTML = digit + ' '; // Atualiza a letra no span correspondente
        cont++;
    }
}

// Função para validar a palavra e avançar para a próxima
function enter() {
    let palavraAtual = palavras[indiceAtual]; // Pega a palavra atual
    let correta = true;
    
    // Verifica se todas as letras estão corretas
    for (let i = 0; i < palavraAtual.length; i++) {
        if (resp[i].innerHTML.trim() === palavraAtual[i]) {
            resp[i].style.color = 'green';
        } else {
            resp[i].style.color = 'red';
            correta = false;
        }
    }

    // Se todas as letras estiverem corretas, avança para a próxima palavra
    if (correta) {
        let musicLvUp = new Audio('assets/audio/LevelUp.mp3');
        musicLvUp.play();
        dicaFem.innerHTML = `Parabéns, você acertou!`;
        dicaMasc.innerHTML = palavraAtual + ' é a palavra correta! Está indo muito bem!';
        indiceAtual++; // Avança para a próxima palavra
        setTimeout(mostrarProximaPalavra, 4000); // Exibe a próxima palavra após 2 segundos
        score+=1;
        coin.innerHTML = `${score}`;
    }
    //Se a palavra ou letra estiver icorreta ativará esse som
    if (!correta){
        if(coin>=1){
            score-=1;
            coin.innerHTML = `${score}`;
        }
        let musicFail = new Audio('assets/audio/fail.mp3');
        musicFail.play();
    }
    localStorage.setItem('score', score);
}
//Informando o número de moedas no menu de cards
let cashMenu = document.getElementById('coins');
cashMenu.innerHTML = localStorage.getItem('score');


//A função de limpar volta para o estado inical do jogo no que diz respeito as respostas
function limpar(){
    mostrarProximaPalavra();
}

function registerName(){
    let nome = document.getElementById('campoNome').value;
    localStorage.setItem('Nome', nome);
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = `Olá ${nome}, Bem vindo(a) ao aprende ABC!`;
}