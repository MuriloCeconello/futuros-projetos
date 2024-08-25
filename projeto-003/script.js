var menu = document.getElementById('menu')
var flagMenu = document.getElementById('flag-menu')
var menuCountry = document.getElementById('menu-country')

function mudouTela() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
        menuCountry.style.display = 'block'
    } else {
        menu.style.display = 'none'
        menuCountry.style.display = 'none'
    }
}

function clickMenu() {
    flagMenu.style.display = 'none'
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function clickCloseMenu() {
    flagMenu.style.display = 'block'
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

//   Country-Flags

function clickMenuCountry() {
    if (menu.style.display == 'none') {
        if (menuCountry.style.display == 'block') {
            menuCountry.style.display = 'none'
        } else {
            menuCountry.style.display = 'block'
        }
    } else {
        menuCountry.style.display = 'block'
    }

}

function clickCloseMenuCountry() {
    if (menuCountry.style.display == 'block') {
        menuCountry.style.display = 'none'
    } else {
        menuCountry.style.display = 'block'
    }
}