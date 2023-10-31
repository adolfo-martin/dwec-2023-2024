class CochesRepositorioMock {
    static coches = [
        { id: 1, marca: 'Seat', modelo: 'León' },
        { id: 2, marca: 'Audi', modelo: 'A3' },
        { id: 3, marca: 'Volkswagen', modelo: 'Golf' },
        { id: 4, marca: 'Seat', modelo: 'Toledo' },
        { id: 5, marca: 'Volswagen', modelo: 'T-roc' },
    ]

    recuperarCoches() {
        return CochesRepositorioMock.coches;
    }

    recuperarCochePorId(id) {
        return CochesRepositorioMock.coches.find(coche => coche.id === id);
    }

    actualizarCochePorId(id, marca, modelo) {
        const posicion = CochesRepositorioMock.coches.findIndex(coche => coche.id === id);
        CochesRepositorioMock.coches.splice(posicion, 1, { id, marca, modelo });
    }

    eliminarCochePorId(id) {
        const posicion = CochesRepositorioMock.coches.findIndex(coche => coche.id === id);
        CochesRepositorioMock.coches.splice(posicion, 1);
    }

    agregarCoche(marca, modelo) {
        const ultimoIndice = CochesRepositorioMock.coches[CochesRepositorioMock.coches.length - 1].id;
        CochesRepositorioMock.coches.push({ id: ultimoIndice + 1, marca, modelo });
    }
}

module.exports.CochesRepositorioMock = CochesRepositorioMock;