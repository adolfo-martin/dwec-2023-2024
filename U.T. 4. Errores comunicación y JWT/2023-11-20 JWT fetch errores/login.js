import { openSpinner, closeSpinner } from '/spinner.lib.js';

document.addEventListener('DOMContentLoaded', setupButton);


function setupButton(_) {
    document.querySelector('#tButValidate')
        .addEventListener('click', async _ => {
            const username = document.querySelector('#tTxtUsername').value;
            const password = document.querySelector('#tPasPassword').value;
            await validateUser(username, password);
        });
}


async function validateUser(username, password) {
    openSpinner();

    let response;
    try {
        response = await fetch('http://127.0.0.1:9001/api/login_user', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
    } catch (error) {
        alert(`(ERROR) El usuario no ha podido ser validado por un problema en el servidor. \n ${error.message}`);
        closeSpinner();
        return;
    }

    if (!response.ok) {
        alert(`El usuario o la contraseña no es correcto.`);
        closeSpinner();
        return;
    }

    let data;
    try {
        data = await response.json();
    } catch (error) {
        alert(`(ERROR) El usuario no ha podido ser validado por un problema en el JSON. \n ${error.message}`);
        closeSpinner();
        return;
    }

    if (!data.ok) {
        alert(`El usuario o la contraseña no es correcto. ${data.message}`);
        closeSpinner();
        return;
    }

    const token = data.accessToken;
    window.localStorage.setItem('token', token);
    closeSpinner();

    const decodedToken = decodeToken(token);
    alert(`Bienvenido, Sr/Sra ${decodedToken.firstname} ${decodedToken.lastname}`)
}


function decodeToken(token) {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
}