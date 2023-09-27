const frutas = new Array();

frutas.push('Pera');
frutas.push('Manzana');
frutas.push('🍌');
frutas.push('Kiwi');
frutas.push('🍉');
frutas.push('Fresa');
frutas.push('Melón', 'Limón', 'Aguacate');

// console.table(frutas);

// 1 forma. La de toda la vida, la de primero
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// 2 forma: foreach de tipo in
// for (const i in frutas) {
//     console.log(`${parseInt(i) + 1}) ${frutas[i]}`);
// }

// 3 forma: foreach de tipo of
console.clear();

// for (const fruta of frutas) {
//     console.log(fruta)
// }

// 4 forma. Métodos de la clase Array

// 1 forma

// mostrarFruta('tomate');

// function mostrarFruta(fruta) {
//     console.log(fruta);
// }

// frutas.forEach(mostrarFruta);

// 2 forma

// frutas.forEach(function mostrarFruta(fruta) {
//     console.log(fruta);
// });

// mostrarFruta('tomate');

// 3 forma. lambda

// frutas.forEach(function (fruta) {
//     console.log(fruta);
// });

// 4 forma. funciones flecha

// 1 cortar el nombre
// 2 poner la flecha
// 3 borrar function
// 4 si hay un solo parámetro quitamos los paréntesis
// 5 si hay una sola línea de código quitamos las llaves
// 6 si hay una sola línea la subimos y le quitamos el punto y coma

// frutas.forEach(fruta => console.log(fruta));

// 5 forma  
// const mostrarFruta = fruta => console.log(fruta);
// frutas.forEach(mostrarFruta);

// frutas.forEach(fruta => console.log(fruta));

frutas.forEach(function (fruta, arregloFrutas, i) {
    const posicion = i + 1;

    let contador = 0;
    for (const fruta2 of arregloFrutas) {
        if (fruta2.length > fruta.length) {
            contador++;
        }
    }

    console.log(posicion, ')', fruta, `Hay ${contador} frutas con nombre más largo`);
});