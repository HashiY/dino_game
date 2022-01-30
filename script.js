const dino = document.querySelector('.dino'); //para selecionar e manipular os elementos da tela
const background = document.querySelector('.background');//nao pode ser sobreescrito

function handleKeyUp(event) {
    if (event.keyCode === 32) {//space
        jump();
    }
}

function jump(){
    let position = 0;

    let upInterval = setInterval(() =>{ //defini intervalos
        if (position >= 150){
            clearInterval(upInterval); // para de subir
            // Descendo
            let downInterval = setInterval(() =>{
                if (position <= 0){
                    clearInterval(downInterval);// para de descer
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);
        }else{
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px'; 
        }
        
    },20);
}


document.addEventListener('keyup', handleKeyUp);