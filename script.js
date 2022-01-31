const dino = document.querySelector('.dino'); //para selecionar e manipular os elementos da tela
const background = document.querySelector('.background');//nao pode ser sobreescrito

let isJumping = false;
let position = 0;
let isGameOver = false;

function handleKeyUp(event) {
    if (event.keyCode === 32 || event.button === 0) {//space
        if (!isJumping){
            jump();
        }
        if(isGameOver == true){
            isGameOver = false;
            location.reload();
        }
    }
}

function jump(){
    isJumping = true;

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
            },40);
        }else{
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px'; 
        }
    },10);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    cactus.classList.add('cactus');
    background.appendChild(cactus); // adiciona o cactus
    cactus.style.left = cactusPosition + 'px';

    let leftInterval = setInterval(() =>{
        if (cactusPosition < -60){
            // Saiu da tela
            clearInterval(leftInterval);
            background.removeChild(cactus);
        //Colisao com o dino
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1> <img class="go-img" src="reload.png" alt="reload">';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },25);
    setTimeout(createCactus, randomTime); //vai ser executada depois de um determinado tempo
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('click', handleKeyUp);