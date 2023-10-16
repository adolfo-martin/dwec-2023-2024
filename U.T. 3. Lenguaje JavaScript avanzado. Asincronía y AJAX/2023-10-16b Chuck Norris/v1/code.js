document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    getJoke();
}


function getJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const joke = data.value;
            showJoke(joke);
        })
        .catch(alert);
}


function showJoke(joke) {
    const nParagraph = document.getElementById('tParJoke');
    nParagraph.textContent = joke;
}