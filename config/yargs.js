const argv = require('yargs')
                .options({
                    //lista de parametros en un comando
                    'b' : {
                        alias : 'base',
                        type : 'number',
                        demandOption : true,
                        default: 5,
                        describe : 'Es la base de la tabla de multiplicar'
                    },
                    'l' : {
                        alias : 'listar',
                        type : 'boolean',
                        default: false,
                        describe : 'Muestra o no, la tabla en consola'
                    },
                    'h' : {
                        alias : 'hasta',
                        type : 'number',
                        default: 10,
                        describe : 'Es el limite de la tabla de multiplicar'
                    },
                })
                .check((argv, options) => {
                    //Si la base no es un numero...
                    if( isNaN(argv.base) ){
                        throw 'Error en parametro: La base debe de ser un numero.'
                    }

                    //Si el limite no es un numero...
                    if( isNaN(argv.hasta) ){
                        throw 'Error en parametro: El limite debe de ser un numero.'
                    }

                    //Base y Hasta limitados hasta el 100 para no explotar la PC xd
                    if(argv.base > 100 || argv.hasta > 100){
                        throw 'La base y el limite estan limitados hasta los 100 numeros, prueba con nros menores o igual a 100'
                    }

                    //Base y Hasta limitados hasta el 100 para no explotar la PC xd
                    if(argv.base < -100 || argv.hasta < -100){
                        throw 'No te hagas el vivo con los numeros negativo tampoco se puede sobrepasar los -100. Base y Hasta limitados a numeros mayores o iguales del -100'
                    }

                    return true;
                })
                .argv;


module.exports = argv ;