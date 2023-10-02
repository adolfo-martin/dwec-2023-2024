import { datosEmpresa as employees } from "./datos_empresa.js";

function showManagerQuantity() {
    // const isManager = employee => employee.categoria === 'gerente';

    // const isManager = ({ categoria }) => categoria === 'gerente';

    const isManager = ({ categoria: category }) => category === 'gerente';


    const quantity = employees.filter(isManager).length;
    console.log(quantity);
}

showManagerQuantity();


function showSortedBlondeDevelopersFullname() {
    const people = employees
        .filter(employee => employee.categoria === 'informatico')
        .filter(employee => employee.colorPelo === 'rubio')
        .map(employee => `${employee.apellido}, ${employee.nombre}`)
        .sort();

    console.table(people);
}

showSortedBlondeDevelopersFullname();