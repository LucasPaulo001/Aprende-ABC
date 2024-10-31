//Pegando o valor do score no localStorage
localStorage.getItem('score');
//Pegando os botões do exercício e colocando em um array
const letras = [...document.getElementsByClassName('ex')];
let certas = [];
//Variável que recebe o valor no local storage para somar a pontuação
let coins = Number(localStorage.getItem('score'))||0;
//Variável que adiciona o feedback nas respostas
const feedback = document.getElementById('feedback');
console.log(letras);
//Inserindo o valor da variável coins no campo do html
document.getElementById('coinsEx').innerHTML = coins;

let questaoStatus = localStorage.getItem('q01')||0;
//Método para verificar as letras certas e erradas para as consoantes
letras.map((element) => {
    element.addEventListener('click', (letra) => {
        var feedback = document.getElementById('feedback');
        if(letra.target.getAttribute('data-letra') === 'A' || letra.target.getAttribute('data-letra') === 'E'){
            certas.push(letra.target.getAttribute('data-letra'));
            console.log(certas);

            if(certas.length > 4 || questaoStatus == 'Finalizada'){
                coins+=0
                localStorage.setItem('q01', 'Finalizada');
                
            }
            else if(certas.length <= 4){
                coins+=10;
            }
            var som = new Audio('assets/audio/ding.mp3');
            som.play();
            element.style.backgroundColor = 'green';
            feedback.innerHTML = '<p>Parabéns você está indo muito bem</p>'
            localStorage.setItem('score', coins);
            document.getElementById('coinsEx').innerHTML = localStorage.getItem('score');
            document.getElementById('coins').innerHTML = localStorage.getItem('score');
        }
        
        else{
            element.style.backgroundColor = 'red';
            feedback.innerHTML = '<p>Ops...Parece que temos que revisar novamente<p/>'
            som = new Audio('assets/audio/fail.mp3');
            som.playbackRate = 3;
            som.play();
        }
    })
})
if(localStorage.getItem('q01') == 'Finalizada' || localStorage.getItem('q02') == 'Finalizada'){
    feedback.innerHTML = '<p>Você finalizou esta questão &#10004;</p>';
    feedback.style.color = 'green';
}

let certasq2=[];
let questaoStatusq2 = localStorage.getItem('q02')||0;
let feedbackq2 = document.getElementById('feedbackq2');
const letrasQ2 = [...document.getElementsByClassName('q2')];
letrasQ2.map((element) => {
    element.addEventListener('click', (content) => {
        if(content.target.getAttribute('data-letra') === 'C' || content.target.getAttribute('data-letra') === 'H' || content.target.getAttribute('data-letra') === 'R'){

            certasq2.push(content.target.getAttribute('data-letra'));
            console.log(certasq2);

            if(certasq2.length > 5 || questaoStatusq2 == 'Finalizada'){
                coins+=0
                localStorage.setItem('q02', 'Finalizada');
                console.log(certasq2)
            }
            else if(certasq2.length <= 5){
                coins+=10;
            }
            var som = new Audio('assets/audio/ding.mp3');
            som.play();
            element.style.backgroundColor = 'green';
            feedbackq2.innerHTML = '<p>Parabéns você está indo muito bem</p>'
            localStorage.setItem('score', coins);
            document.getElementById('coinsEx').innerHTML = localStorage.getItem('score');
            document.getElementById('coins').innerHTML = localStorage.getItem('score');
        }
        
        else{
            element.style.backgroundColor = 'red';
            feedbackq2.innerHTML = '<p>Ops...Parece que temos que revisar novamente<p/>'
            som = new Audio('assets/audio/fail.mp3');
            som.playbackRate = 3;
            som.play();
        
        }
    })
})
if(localStorage.getItem('q02') == 'Finalizada'){
    feedbackq2.innerHTML = '<p>Você finalizou esta questão &#10004;</p>';
    feedbackq2.style.color = 'green';
}


