const links = document.querySelectorAll('.cate')
const light = document.querySelector('.cate-night')

function moveLight({offsetLeft, offsetWidth}){
    light.style.left = `${offsetLeft - offsetWidth/100}px`
}

function activeLink(LinkActive){
    light.forEach(Link => {
        Link.classList.remove('active')
        LinkActive.classList.add('active')
    })
}

links.forEach((Link) => {
    Link.addEventListener('click', (event) => {
        moveLight(event.target)
        activeLink(Link)
    })
})


function startLog(){
    var LogBlock = document.querySelector('.entrar-container')

    if(LogBlock.style.display = 'flex'){
    }
}

function sairLogin(){
    var LogBlock = document.querySelector('.entrar-container')
    if(LogBlock.style.display = 'none'){

    }
}


function startLogin(){
    var LogInBlock = document.querySelector('.registrar-container')
    if(LogInBlock.style.display = 'flex'){
    }
}

function SairRegistrar(){
    var LogInBlock = document.querySelector('.registrar-container')
    if(LogInBlock.style.display = 'none'){

    }
}