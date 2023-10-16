document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    getJokeInEnglish();
}


function getJokeInEnglish() {
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const joke = data.value;
            translateJokeFromEnglishToSpanish(joke);
        })
        .catch(alert);
}


function translateJokeFromEnglishToSpanish(jokeInEnglish) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${jokeInEnglish}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const jokeInSpanish = data[0][0][0];
            showJoke(jokeInSpanish);
        })
        .catch(alert);
}


function showJoke(joke) {
    const nParagraph = document.getElementById('tParJoke');
    nParagraph.textContent = joke;
}