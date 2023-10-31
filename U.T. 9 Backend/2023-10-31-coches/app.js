'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { CochesRepositorioMock } = require('./CochesRepositorioMock.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/api/coches', enviarCoches);
app.get('/api/coche/:id', enviarCoche);
app.delete('/api/coche/:id', eliminarCoche);
app.post('/api/coche', agregarCoche);
app.put('/api/coche', actualizarCoche);


app.listen(3000, () => console.log('El servidor está escuchando en el puerto 3000'));


function enviarCoches(req, res) {
    const repositorio = new CochesRepositorioMock();
    const coches = repositorio.recuperarCoches();

    res.status(200)
        .send({ ok: true, coches });
}


function enviarCoche(req, res) {
    const cocheId = parseInt(req.params.id);

    const repositorio = new CochesRepositorioMock();
    const coche = repositorio.recuperarCochePorId(cocheId);

    if (!coche) {
        res.status(404)
            .send({ ok: false, mensaje: `No hay un coche con identificador ${cocheId}` });
    } else {
        res.status(200)
            .send({ ok: true, coche });
    }
}


function eliminarCoche(req, res) {
    const cocheId = parseInt(req.params.id);

    const repositorio = new CochesRepositorioMock();
    repositorio.eliminarCochePorId(cocheId);
    res.status(200)
        .send({ ok: true, mensaje: `Coche con identificador ${cocheId} eliminado` });
}


function agregarCoche(req, res) {
    const marca = req.body.marca;
    const modelo = req.body.modelo;

    console.log(req.body);
    console.log(marca, modelo);

    const repositorio = new CochesRepositorioMock();
    repositorio.agregarCoche(marca, modelo);
    res.status(200)
        .send({ ok: true, mensaje: `Coche agregado` });
}


function actualizarCoche(req, res) {
    const id = req.body.id;
    const marca = req.body.marca;
    const modelo = req.body.modelo;

    console.log(req.body);
    console.log(marca, modelo);

    const repositorio = new CochesRepositorioMock();
    repositorio.actualizarCochePorId(id, marca, modelo);
    res.status(200)
        .send({ ok: true, mensaje: `Coche agregado` });
}