const FS = require('fs'); //FileSystem
const colors = require('colors'); //Colores para la consola


const crearTablaMultiplicarTxt = async( base=5, listar=false, hasta=10 ) =>{
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log( colors.rainbow("<====================================>") );
            console.log( colors.yellow('\t     Tabla del ', base) );
            console.log( colors.rainbow("<====================================>") );
    
            console.log(colors.brightGreen(`\n${salida}`));
        }
        
        nombreArchivoTabla= `tabla-multip-${base}.txt`
        
        FS.writeFileSync(`./tablas-multiplicar/${nombreArchivoTabla}`, salida)

        return nombreArchivoTabla;
    } catch (error) {
        throw error+ '. ERROR CRITICO PA, AYEEE';
    }
    
}

module.exports = {
    crearTablaMultiplicarTxt
}


//Documentacion: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback