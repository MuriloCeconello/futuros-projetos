var menu = document.getElementById('menu-mobile')
var flagMenu = document.getElementById('flag-menu')
var flagImg = document.getElementById('flag-img')
var menuCountry = document.getElementById('menu-country')
var searchBox = document.getElementById('search-box')

function mudouTela() {
    if (window.innerWidth <= 900) {
        menu.style.display = 'none'
        menuCountry.style.display = 'none'
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
    flagImg.style.animationIterationCount  = '0'
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
        searchBox.style.display = 'none'
    }

}

function clickCloseMenuCountry() {
    if (menuCountry.style.display == 'block') {
        menuCountry.style.display = 'none'
        searchBox.style.display = 'block'
    } else {
        menuCountry.style.display = 'block'
        
    }
}