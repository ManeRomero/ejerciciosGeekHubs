/* CREA UN MINIPROGRAMA QUE DIRIMA SI UNA PERSONA ES MAYOR DE EDAD, A TESÓN DE UNA GENERACIÓN ALEATORIA DE NÚMEROS
SE DEBERÁ REGISTRAR POR CONSOLA CADA UNO DE LOS PASOS DADOS EN EL BUCLE.*/
/* var counter = 1
do {
    var random = parseInt((Math.random())*100)
    console.log('PASO NÚMERO: ', counter, '. EDAD: ', random)
    counter++
} while (random < 18) */

/* CREAR UNA PIRÁMIDE CONVENCIONAL DE CARACTER, UTILIZANDO RECURSIVIDAD */

var char = '▄'
var space = ' '
var saltoLinea = '\n'
var base = 7
var result = ''

/* for (var i = 1; i <= base; i+=2) {
    for (var j = 0; j <= parseInt((base - i) / 2); j++) {
        result += space
        result += char
    }
    result += saltoLinea
} */

/* for (var i = 1; i < base; i += 2) {
    for (var j = 1; j < base - i; i += 2 ){
        result += space
    }
    result += char
} */

console.log('AQUÍ LA PIRAMID!\n', result)