const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.addEventListener('keyup', e => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 2000)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
    //criar array, sem virgulas
    //cria um array sem espaços
    //criar array em que cada elemento sem espaços, tem de ser diferente de vazio

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        console.log(document)
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag

        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 10
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        //passar o randomTag como argumento
        setTimeout(unhighlightTag, 100, randomTag)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 1000)
    }, times * 100)
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}
