import { datosEmpresa as employees } from './datos_empresa.js';

export class PeopleRepository {

    getHairColors() {
        const extractHairColor = employee => employee.colorPelo;

        // const colors = employees.map(extractHairColor);
        // const set = new Set(colors);
        // return Array.from(set);

        return Array.from(new Set(employees.map(extractHairColor)));
    }

}