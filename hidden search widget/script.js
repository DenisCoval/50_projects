const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')

button.addEventListener('click', () => {
    search.classList.toggle('show')
    input.focus()
})
