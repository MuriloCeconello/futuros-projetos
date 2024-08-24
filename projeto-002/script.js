var sidebar = document.getElementById('list')
var toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

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
    } else {
        sidebar.style.display = 'block'
    }
}