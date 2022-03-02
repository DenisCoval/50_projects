const small_cups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
highlightBigCup()

small_cups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
    // cup.addEventListener('click', () => highlightBigCup())
})

function highlightCups(limit) {
    if (
        small_cups[limit].classList.contains('full') &&
        !small_cups[limit].nextElementSibling.classList.contains('full')
    ) {
        limit--
    }

    small_cups.forEach((cup, idx) => {
        if (idx <= limit) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    highlightBigCup()
}

function highlightBigCup() {
    const counted = document.querySelectorAll('.full').length
    const totalCups = small_cups.length
    const height = (percentage.innerText = (100 / totalCups) * counted + '%')

    if (counted == 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = height
    }
    if (counted == totalCups) {
        console.log('oi')
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        // liters.innerText = 2 - (2 / totalCups) * counted + 'L'
        liters.innerText = `${2 - (2 / totalCups) * counted}L`
    }
}
