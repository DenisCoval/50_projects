const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // remove()
        toggle.parentNode.classList.toggle('active')
    })
})
