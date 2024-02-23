// HTML
const html = document.querySelector('html');

// Botões
const focoBt = document.querySelector('.app__card-button--foco');
const longoBt = document.querySelector('.app__card-button--longo');
const curtoBt = document.querySelector('.app__card-button--curto');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');

let tempoDecorrido = 5;
let intervaloId = null;

// Imagens
const banner = document.querySelector('.app__image');

// Música
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');

musica.loop = true;

musicaFoco.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

// Foco
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active')
    
})

// Break curto
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')
    
})

// Break longo
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active')
    
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src',`/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;

        case 'descanso-curto':
            titulo.innerHTML = `Que tal da uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa!</strong>`

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorrido <= 0) {
        zerar();
        alert("Tempo esgotado!")
        return
    }
    tempoDecorrido -= 1;
    console.log('Temporizador: ' + tempoDecorrido); 
}

startPauseBt.addEventListener('click', iniciarPausar)

function iniciarPausar() {
    if (intervaloId) {
        zerar()
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

