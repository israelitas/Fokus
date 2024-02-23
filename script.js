// HTML
const html = document.querySelector('html');

// Botões
const focoBt = document.querySelector('.app__card-button--foco');
const longoBt = document.querySelector('.app__card-button--longo');
const curtoBt = document.querySelector('.app__card-button--curto');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const iniciarPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

let tempoDecorrido = 1500;
let intervaloId = null;

// Imagens
const banner = document.querySelector('.app__image');
const imgPlay = document.querySelector('#start-pause .app__card-primary-butto-icon')

// Música
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')


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
    tempoDecorrido = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active')
    
})

// Break curto
curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')
    
})

// Break longo
longoBt.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active')
    
})

function alterarContexto(contexto) {
    mostrarTempo();
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
        //audioTempoFinalizado.play();
        alert("Tempo esgotado!")
        zerar();
        imgPlay = 'pause.png';
        return
    }
    tempoDecorrido -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarPausar)

function iniciarPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar()
        imgPlay.src = 'imagens/play_arrow.png'
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarPausarBt.textContent = 'Pausar'
    imgPlay.src = 'imagens/pause.png'
}

function zerar() {
    clearInterval(intervaloId);
    iniciarPausarBt.textContent = 'Começar'
    intervaloId = null;
} 

function mostrarTempo () {
    const tempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo();
