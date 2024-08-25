var menu = document.getElementById('menu')

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
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
} 

//   Country-Flags

var  menuCountry = document.getElementById('menu-country')

function clickMenuCountry(){
    if(menuCountry.style.display == 'block'){
        menuCountry.style.display = 'none'
    }else{
        menuCountry.style.display = 'block'
    }
}