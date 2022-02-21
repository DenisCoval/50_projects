const button = document.getElementById('toggle')

button.addEventListener(
    'click',
    () => button.parentNode.classList.toggle('active')
    //ou trazemos a nav e fazemos isto:
    //nav.classList.toggle('active)
)
