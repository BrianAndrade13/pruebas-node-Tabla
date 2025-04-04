const argv = require('yargs').options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la Base de la tabla de Multiplicar',
  }).options('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla de Multiplicar',
    }).options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero se va a multiplicar en la tabla',
      })
  .check((argv, options)=>{
      if(isNaN(argv.b)) {
      throw 'La Base tiene que ser un Numero'
      }
      return true;
  })
  .argv;

  module.exports = argv; 