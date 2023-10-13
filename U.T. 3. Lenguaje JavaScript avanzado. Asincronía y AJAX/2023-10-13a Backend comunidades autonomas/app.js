import express from 'express';
import { ComunidadesRepositoryMock } from './ComunidadesRepositoryMock.js';

const app = express();

app.get('/api/comunidades', devolverComunidades);

app.listen(3000, () =>
    console.log('Server listening on port 3000')
);

function devolverComunidades(request, response) {
    setTimeout(
        function () {
            const repository = new ComunidadesRepositoryMock();
            const comunidades = repository.recuperarComunidades();
            response.setHeader("Content-Type", "application/json");
            response.setHeader("Access-Control-Allow-Origin", '*');
            response.send({ ok: true, comunidades: comunidades });
        },
        3000
    )

}