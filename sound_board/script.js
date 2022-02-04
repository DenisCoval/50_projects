const sounds = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis']
const teste = document.createElement('teste')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    const buttons = document.getElementById('buttons')
    buttons.appendChild(btn)
})
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}
