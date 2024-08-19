var menu = document.getElementById('menu')
var burger = document.getElementById('burgermenu')

function mudouTela() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}


function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
        burger.style.position = 'absolute'
        burger.style.right = '30px'
    }
}