// Arrays com as palavras e dicas
let palavras = ['BOLA', 'GATO', 'CACHORRO', 'CARRO', 'LIVRO', 'SOL', 'CASA'];
let dicas = ['É um brinquedo', 'É um animal de estimação', 'É o melhor amigo do homem', 'Esse é um veículo com quatro rodas que usamos para viajar ou ir de um lugar a outro.', 'É cheio de páginas, você lê e aprende coisas novas com ele!', 'Brilha no céu e nos aquece durante o dia.', 'É onde você mora e vive com sua família.'];

let voicePerson = ['assets/audio/personVoice/Voz(É um brinquedo).mp3', 'assets/audio/personVoice/Voz(É um animal de estimação).mp3', 'assets/audio/personVoice/Voz(É o melhor amigo do homem).mp3', 'assets/audio/personVoice/Voz(veículo).mp3', 'assets/audio/personVoice/voz(livro).mp3','assets/audio/personVoice/voz(sol).mp3', 'assets/audio/personVoice/voz(casa).mp3'];

let dicaPersonSabichao = ['Sabia que a primeira bola de futebol era feita de couro e costurada à mão? Com o tempo, elas ficaram mais leves e ganhamos as bolas modernas de hoje!', 'Sabia que os gatos têm uma capacidade incrível de pular até seis vezes a sua própria altura? Eles também dormem cerca de 13 a 16 horas por dia!', 'Sabia que o olfato dos cachorros é até 100.000 vezes mais poderoso que o dos humanos? Eles conseguem farejar cheiros que nós nem imaginamos!', 'Você sabia que os primeiros carros funcionavam a vapor e que o carro moderno só começou a ser inventado em 1885 pelo alemão Karl Benz?', 'Você sabia que o livro mais antigo conhecido foi escrito há cerca de 5.000 anos? Era uma tabuinha de argila da antiga Mesopotâmia!', 'Sabia que a luz do sol demora cerca de 8 minutos e 20 segundos para chegar à Terra? O sol é tão grande que caberiam mais de um milhão de Terras dentro dele!', 'Casas podem ser de muitos tipos diferentes ao redor do mundo! Em alguns lugares, elas são feitas de madeira, em outros de pedra, barro ou até gelo, como as iglus!']

let images = ['assets/imagens/obj_imagens/bola.png', 'assets/imagens/obj_imagens/gato.png', 'assets/imagens/obj_imagens/cachorro.png', 'assets/imagens/obj_imagens/carro.png', 'assets/imagens/obj_imagens/livro.png', 'assets/imagens/obj_imagens/sol.png', 'assets/imagens/obj_imagens/casa.png'];

let indiceAtual = 0;
let cont = 0;
let resp = [];
let dicaMasc = document.getElementById('dicaMasc');
let dicaSabichao = document.getElementById('dicaPerson')
//let dicaFem = document.getElementById('dicaFem');
let letrasContainer = document.getElementById('resp');
const coin = document.getElementById('coin');
coin.innerHTML = localStorage.getItem('score');
let score = Number(localStorage.getItem('score'))||0;
let cashMenu = document.getElementById('coins');
cashMenu.innerHTML = Number(localStorage.getItem('score'))||0;

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
        setTimeout(limpaCuriosidade, 7000);

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
        dicaSabichao.innerHTML = 'Você completou todas as palavras! Parabéns!';
        dicaSabichao.style.display = 'flex';

    }
}
//Evento que aciona a voz do personagem saltito com a dica
if(localStorage.getItem('personagemLocal01')){
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
function limpaCuriosidade(){
    dicaSabichao.innerHTML = '';
}
var musicMain = null;

// Adiciona o evento para o botão com ID "open-game" ou "play"
/*let playMusic = document.getElementById('open-game');
playMusic.addEventListener('click', (element) => {
    if (element.target.id === 'open-game' || element.target.id === 'play') {
        play(); // Chama a função para tocar a música
    }
});*/

function play() {
    if (!musicMain) {
        musicMain = new Audio('assets/audio/music_main.mp3');
        musicMain.volume = 0.5; // Define o volume da música
    }

    // Tenta tocar a música e captura erros de permissão ou compatibilidade
    musicMain.play().catch(error => {
        console.error("Erro ao tentar reproduzir o áudio:", error);
    });
}

// Evento para pausar a música ao clicar no botão "stopMusic"
//let stopMusicButton = document.getElementById('stopMusic');
//stopMusicButton.addEventListener('click', stopMusic());

function stopMusic() {
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
        let curiosidade = dicaPersonSabichao[indiceAtual];
        let musicLvUp = new Audio('assets/audio/LevelUp.mp3');
        musicLvUp.play();
        dicaMasc.innerHTML = palavraAtual + ' é a palavra correta! Está indo muito bem!';
        dicaSabichao.innerHTML = curiosidade;
        indiceAtual++; // Avança para a próxima palavra
        setTimeout(mostrarProximaPalavra, 5000); // Exibe a próxima palavra após 2 segundos
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
    document.getElementById('coins').innerHTML = localStorage.getItem('score');
    document.getElementById('coinsEx').innerHTML = localStorage.getItem('score');
}

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