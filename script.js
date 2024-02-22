const html = document.querySelector('html');

//botoes
const focoBt = document.querySelector('.app__card-button--foco');
const longoBt = document.querySelector('.app__card-button--longo');
const curtoBt = document.querySelector('.app__card-button--curto');

//imagens
const banner = document.querySelector('.app__image')

//foco
focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/imagens/foco.png')
})

// break curto
curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src','/imagens/descanso-curto.png')
})

//break longo
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/imagens/descanso-longo.png')
    //window.location.href = "https://sgeprodweb.sistemafiergs.com.br/FrameHTML/web/app/edu/PortalEducacional/login/"
})