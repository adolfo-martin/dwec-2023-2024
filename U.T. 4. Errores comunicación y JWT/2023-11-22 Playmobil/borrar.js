const boxUuids = [
    "243308d5-6ff7-4798-8c83-9348fe1ad089",
    "87a4b93d-632d-415d-b8f2-02d3bb3c1a31",
    "8903a09e-00d3-45dc-afd6-37478cdf44ae",
    "dbf039d6-f9c1-496b-b46f-aee8787fac91"
]

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbmlhLnNpbHZlcmFkbyIsImZpcnN0bmFtZSI6IlNvbmlhIiwibGFzdG5hbWUiOiJTaWx2ZXJhZG8iLCJpYXQiOjE3MDEzNDA5MzUsImV4cCI6MTcwMTM1NTMzNX0.WYWkhcN1u2YO9wRKclFiIpZf8FPSqH-6EgHxT8nSIo4";

(async function () {

    const promises = boxUuids.map(boxUuid => getBoxByUuid(token, boxUuid))
    const boxes = await Promise.all(promises);

    boxes.forEach(box => {
        console.log(box._denomination);
    })
})()


async function getBoxByUuid(token, uuid) {
    const url = `http://127.0.0.1:8082/api/box/${uuid}`;

    // Comprueba si el servidor está encendido
    let response;
    try {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        response = await fetch(url, {
            method: 'get',
            headers
        });
    } catch (error) {
        throw new Error(`Cannot retrieve series: ${error}`);
    }

    // Comprueba si el fetch fue correcto
    if (!response.ok) {
        throw new Error(`Cannot retrieve series: [${response.status} ${response.statusText}]`);
    }

    // Comprueba si estoy recibiendo JSON
    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error(`Cannot retrieve series: ${error}`);
    }

    // Comprueba si el data es correcto
    if (!data.ok) {
        throw new Error(`Cannot retrieve series: ${data.message}`);
    }

    return data.box;
}