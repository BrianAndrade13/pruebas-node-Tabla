const fs = require('node:fs');

const crearArchivo = async ( base = 20, listar = false, hasta = 10 ) => {


   try {

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`; }

     if(listar) {    console.log('===============');
        console.log(`Tabla del: ${base}`);
        console.log('===============');   
        console.log(salida);
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt`
   } catch (err) {
    throw err
   }
}


module.exports = {

    crearArchivo

}

