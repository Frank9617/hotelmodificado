require('colors');
const {guardarDB} = require('./Helpers/guardarArchivo');
const {mostrarMenu} = require('./Helpers/mensajes');
const {inquirerMenu, pausa, leerInput} = require ('./Helpers/inquired')
const Tareas = require('./Models/tareas');
const tarea = require('./Models/tarea');
// console.log (`${'M'.red}${'e'.green}${'n'.blue}${'u'.yellow}`);

const main = async ()=> {

    let opt = "";
    const tareas = new Tareas();
    do {
    opt = await inquirerMenu();
      switch (opt){
        case '1':
            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea(desc);
            break;
        case'2':
            console.log(tareas.listadoArr);
            break;

    }
    guardarDB(tareas.listadoArr);
    await pausa();

   }while(opt != '0')
}






main();