const total = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
    const triggerBottom = (window.innerHeight / 5) * 4

    total.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // console.log(boxTop)

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
