document.addEventListener('DOMContentLoaded', setup);

function setup() {
    fetch('http://127.0.0.1:3000/api/comunidades')
        .then(response => response.json())
        .then(data => fillSelectComunidades(data.comunidades));
}

function fillSelectComunidades(comunidades) {
    console.log(comunidades);
}