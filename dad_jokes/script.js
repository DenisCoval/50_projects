const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

//Uso de ASYNC / AWAIT
// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config)
//     const data = await res.json()
//     joke.innerHTML = data.joke
//     console.log(data)
// }

// Uso de .THEN()
function generateJoke() {
    // fetch('https://icanhazdadjoke.com', {
    //     headers: {
    //         Accept: 'application/json'
    //     }
    // })
    //                 OU

    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => console.log(data))
    // .then(data => (joke.innerHTML = data.joke))
}

jokeBtn.addEventListener('click', generateJoke)
