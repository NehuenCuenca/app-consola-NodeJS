
const { crearTablaMultiplicarTxt } = require('./helpers/multiplicar.js'); //import de una funcion helper

const argv = require('./config/yargs.js'); //import de la config de yargs
const colors = require('colors'); //Colores para la consola

console.clear();


//Si no usaramos yargs.js, tendriamos que configurar los parametros por nosotros mismos asi...
/* const [ , , argBase = 'base=5' ] = process.argv
const [ , base = 5 ] = argBase.split('=');

console.log(argBase);
console.log(base);
*/


crearTablaMultiplicarTxt(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => console.log(colors.green.underline(`${nombreArchivo}. CREADA PA, ASHEE`)))
    .catch((error) => console.log( colors.red.underline(error) ));


