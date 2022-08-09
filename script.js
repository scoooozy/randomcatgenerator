const APIKEY = '3b3fe844-c094-4570-a5a1-1dbb160f6ef2'
const BASE_URL = 'https://api.thecatapi.com/v1/'
const generateButton = document.getElementById('generate')
const randomImage = document.getElementById('randomImage')

function getRandomImage() {
    return fetch(BASE_URL + 'images/search')
        .then(data => data.json())
        .then(data => {
            let image = data[0].url
            return image
        })
}

generateButton.addEventListener('click', () => {
    generateButton.disabled = true
    getRandomImage().then(image => {
        randomImage.setAttribute("src", image)
        generateButton.disabled = false   
    })
})