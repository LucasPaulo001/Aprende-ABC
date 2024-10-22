const buttoms = document.querySelectorAll('.letra');

buttoms.forEach(function(buttom){
    buttom.addEventListener('click', () => {
        const som = buttom.getAttribute('data-som');
        
        const audio = new Audio(som);
        audio.play();
    })
})

