const dino = document.querySelector('.dino'); //para selecionar e manipular os elementos da tela
const background = document.querySelector('.background');//nao pode ser sobreescrito

let isJumping = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {//space
        if (!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;
    let position = 0;

    let upInterval = setInterval(() =>{ //defini intervalos
        if (position >= 150){
            clearInterval(upInterval); // para de subir
            // Descendo
            let downInterval = setInterval(() =>{
                if (position <= 0){
                    clearInterval(downInterval);// para de descer
                    isJumping = false;
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

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    background.appendChild(cactus); // adiciona o cactus
    cactus.style.left = cactusPosition + 'px';
}

createCactus();
document.addEventListener('keyup', handleKeyUp);