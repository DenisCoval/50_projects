const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target'))
        // console.log(typeof target, target)
        const increment = target / 200
        const value = Number(counter.innerText)
        if (value < target) {
            counter.innerText = Math.ceil(value + increment)
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    // setInterval(updateCounter, 10)
    updateCounter()
})
