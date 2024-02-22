// HTML
const html = document.querySelector('html');

// Botões
const focoBt = document.querySelector('.app__card-button--foco');
const longoBt = document.querySelector('.app__card-button--longo');
const curtoBt = document.querySelector('.app__card-button--curto');
const titulo = document.querySelector('.app__title');

// Imagens
const banner = document.querySelector('.app__image');

// Foco
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
})

// Break curto
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

// Break longo
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
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


