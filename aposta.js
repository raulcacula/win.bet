const links = document.querySelectorAll('.cate')
const light = document.querySelector('.cate-night')

function moveLight({offsetLeft, offsetWidth}){
    light.style.left = `${offsetLeft - offsetWidth/500}px`
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