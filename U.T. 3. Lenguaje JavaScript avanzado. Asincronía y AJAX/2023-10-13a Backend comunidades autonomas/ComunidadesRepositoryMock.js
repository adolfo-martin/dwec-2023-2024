export class ComunidadesRepositoryMock {
    static _comunidades = [
        { id: 'mu', nombre: 'Región de Murcia' },
        { id: 'va', nombre: 'Comunidad Valenciana' },
        { id: 'ga', nombre: 'Galicia' },
        { id: 'ma', nombre: 'Madrid' },
        { id: 'ex', nombre: 'Extremadura' },
    ]

    recuperarComunidades() {
        return ComunidadesRepositoryMock._comunidades;
    }
}