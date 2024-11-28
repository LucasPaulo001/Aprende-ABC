var musicMain = null;// variável onde será armazenada a música começa vazia

//armazena os botões de modais clicados em um array
let modais = [...document.getElementsByClassName('btn-modal')]
    
// verifica qual o id do botão de abertura do modal está sendo usado para tocar ou não a música
modais.forEach((elemento) => {
   elemento.addEventListener('click', (content) => {
      const modalId = content.target.getAttribute('data-modal-id')
      console.log(modalId)
      if(modalId === 'modal01'){
        play();
      }
   })
})

//função para abrir o modal
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('abrir');
    
    //Evento para fechar o modal e parar a música
    modal.addEventListener('click', (status) => {
        if (status.target.id === 'fechar' || status.target.id === 'janelaApresentation' || status.target.id === 'janelaModal02') {
            modal.classList.remove('abrir');
            stopMusic(); // Para a música ao fechar o modal
        }
    });
    
    // Adiciona os eventos de clique nos botões de play e stop uma única vez
    document.getElementById('play').onclick = play;
    document.getElementById('stop').onclick = stopMusic;
}

//Função para dar play na música
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

//função para parar a música
function stopMusic() {
    if (musicMain) {
        musicMain.pause();        // Pausa a música
        musicMain.currentTime = 0; // Reseta a música para o início
    }
}

//Abrir modal de apresentação e conteúdos do modal

window.onload = () => {
    let janelaAberta = localStorage.getItem('Status da Janela');

    if(!janelaAberta){
        localStorage.setItem('Status da Janela', '1');

        setTimeout(abrirApresentação, 1000);
    }
    else {
        console.log('janela aberta')
    }
    console.log(janelaAberta)
    
}
function abrirApresentação(){
    const modalApr = document.getElementById('janelaApresentation');
    modalApr.classList.add('abrir');
    modalApr.addEventListener('click', (element) => {
        if(element.target.id === 'fechar' || element.target.id === 'janelaApresentation'){
            modalApr.classList.remove('abrir');
        }
    })
}

const falasProfessor = [
    '<p>Olá, eu sou o seu professor aqui nesse mundo!</p>', 
    '<p>Irei falar um pouco como as coisas funcionam aqui. No botão gigante e vermelho que você verá, ou já viu, quando clicar nele começará a nossa brincadeira!</p>', 
    '<p>Você terá dois tipos de cards, uns para jogar e claro, treinar seus conhecimentos e outros para aprender</p>',
    '<p>Você também pode comprar personagens com diferentes habilidades, cada um pode te ajudar de uma forma diferente: Falar dicas em voz alta, destacar e explicar coisas, etc.</p>',
    '<h2>Agora vamos lá! te vejo por aí.</2>'
];

const imgs = ['assets/imagens/imgs-tutorial/capelo.png', 'assets/imagens/imgs-tutorial/excl.png', 'assets/imagens/imgs-tutorial/explicacao01.png', 'assets/imagens/imgs-tutorial/persons.gif', 'assets/imagens/imgs-tutorial/feliz.png'];
let indiceFala = 0;
let btnFala = [...document.getElementsByClassName('btnF')];

const fala = document.getElementById('professorFalaTexto'); // Div para o texto
const imgContainer = document.getElementById('professorFalaImg'); // Div para a imagem

// Definindo a primeira fala e imagem
fala.innerHTML = falasProfessor[indiceFala];
let localImg = document.createElement('img'); 
imgContainer.appendChild(localImg); // Adiciona a imagem ao container

btnFala.map((el) => {
    el.addEventListener('click', (button) => {
        fala.style.animation = 'texto .7s ease-in-out';
        
        // Verifica o botão e atualiza o índice
        if(button.target.id === 'btnNext' && indiceFala < falasProfessor.length - 1){
            indiceFala += 1;
            localImg.src = imgs[indiceFala];
            
        }
        else if(button.target.id === 'btnBack' && indiceFala > 0){
            indiceFala -= 1;
            localImg.src = imgs[indiceFala];
        }

        // Atualiza o texto e a imagem
        fala.innerHTML = falasProfessor[indiceFala];
        localImg.style.height = '100%';
        localImg.style.width = '100%';
        //localImg.src = imgs[indiceFala];
    });
});

//Funcionalidade para abrir janela de configurações
const janelaSettings = document.getElementById('janelaConf')
function openSettings(){
    janelaSettings.classList.add('ativeSettings')
}
janelaSettings.addEventListener('click', (element) => {
    if(element.target.id === 'janelaConf'){
        janelaSettings.classList.remove('ativeSettings')
    }
})



