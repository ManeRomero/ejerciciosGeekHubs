// crea la función  transformaArrayEnOtraConSusLongitudes
// debe recibir un array 
// devolver y otro array con las longitudes de los strings recibidos en el array

// Si la función no recibe un dato tipo object / array  
// debe devolver el string 'Debo ser ejecutada con un array'
// puedes comprobar si es un array con:
//  typeof array === 'object' && array.length >= 0
// Ha de pasar los test adjuntados.

let transformaArrayEnOtraConSusLongitudes = (arrayDeStrings) => {
    let arrayDeLongitudes = [];
    // Aquí tu código.  Desde aquí:
    if( typeof arrayDeStrings === 'object' && arrayDeStrings.length >= 0 )
    for (var item of arrayDeStrings) {
        arrayDeLongitudes.push(item.length)
    } else {
        return('Debo ser ejecutada con un array')
    }
    // Hasta aquí.
    return arrayDeLongitudes
}

let test = require('../test.js');
test(transformaArrayEnOtraConSusLongitudes, [
    ['juan', 'paco', 'pepe']
], [4, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqq']
], [2, 3, 3]);
test(transformaArrayEnOtraConSusLongitudes, [
    ['EY', 'hoy', 'qqqs', 'hola']
], [2, 3, 4, 4]);
test(transformaArrayEnOtraConSusLongitudes, [''], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [true], 'Debo ser ejecutada con un array');
test(transformaArrayEnOtraConSusLongitudes, [{}], 'Debo ser ejecutada con un array');


/* PIRÁMIDE INVERTIDA */
var char = '#'
var result = ''
for (i=0; i < 6; i++){
for (j=5; j > i; j--) {
        result += char
    }
    result += '\n'
}

var x = new Array()

var funcion = function () {

}

var funcion2 = () => {

} 

var nombres = [
    '56',
    '52',
    '54',
    '50'
]

var listaOrdenada = nombres.sort((a, b) => {
    return a - b
})

console.log(listaOrdenada)

function mostrarNombre (name) {
    console.log('tu nombre es: ', name)
}

nombres.forEach(mostrarNombre)

nombres.forEach(() => {

})