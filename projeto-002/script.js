var sidebar = document.getElementById('list')
var toggleBtn = document.querySelector('.toggle-btn')


function mudouTela() {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }
}

function clickBurger() {
    if (sidebar.style.display == 'block') {
        sidebar.style.display = 'none'
    }else{
        sidebar.style.display = 'block'
    }
}