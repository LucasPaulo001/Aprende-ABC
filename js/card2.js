const buttoms = document.querySelectorAll('.vogal');

buttoms.forEach(function(buttom){
    buttom.addEventListener('click', () => {
        const som = buttom.getAttribute('data-som');
        
        const audio = new Audio(som);
        audio.play();
    })
})

