const dino = document.querySelector('.dino'); //para selecionar e manipular os elementos da tela
const background = document.querySelector('.background');//nao pode ser sobreescrito

function handleKeyUp(event) {
    if (event.keyCode === 32) {//space
      console.log('Pressionou espaço')
    }
  }

document.addEventListener('keyup', handleKeyUp);