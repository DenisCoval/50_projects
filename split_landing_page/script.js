const container = document.querySelector('.container')
const right = document.querySelector('.right')
const left = document.querySelector('.left')

right.addEventListener('mouseover', () =>
    container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () =>
    container.classList.remove('hover-right')
)

left.addEventListener('mouseover', () => container.classList.add('hover-left'))

left.addEventListener('mouseleave', () =>
    container.classList.remove('hover-left')
)
