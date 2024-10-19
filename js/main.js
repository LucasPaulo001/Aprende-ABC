// Arrays com as palavras e dicas
let palavras = ['BOLA', 'GATO', 'CACHORRO', 'CARRO'];
let dicas = ['É um brinquedo', 'É um animal de estimação', 'É o melhor amigo do homem', 'É usado para ir grandes distâncias'];
let images = ['../assets/imagens/obj_imagens/bola.png', '../assets/imagens/obj_imagens/gato.png', '../assets/imagens/obj_imagens/cachorro.png', '../assets/imagens/obj_imagens/carro.png'];



let indiceAtual = 0;
let cont = 0;
let resp = [];
let dicaMasc = document.getElementById('dicaMasc');
let dicaFem = document.getElementById('dicaFem');
let letrasContainer = document.getElementById('resp');

//Inserção da imagem do objeto
let icon = document.getElementById('icon');
let campoImg = document.createElement('img');



mostrarProximaPalavra(); // Exibe a primeira palavra ao carregar o jogo

/*function mostrarImagem(){

}*/

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

// Função para iniciar a música ao iniciar o jogo
var playMusic = 0;
function musicGame() {
    playMusic++;
    if (playMusic == 1) {
        var musicMain = new Audio('../assets/audio/music_main.mp3');
        musicMain.play();
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
        dicaFem.innerHTML = 'Parabéns, você acertou!';
        dicaMasc.innerHTML = palavraAtual + ' é a palavra correta!';
        indiceAtual++; // Avança para a próxima palavra
        setTimeout(mostrarProximaPalavra, 2000); // Exibe a próxima palavra após 2 segundos
    }
}

//A função de limpar volta para o estado inical do jogo no que diz respeito as respostas
function limpar(){
    mostrarProximaPalavra();
}