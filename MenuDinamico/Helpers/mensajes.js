require('colors');

const mostrarMenu =() =>{
    return new Promise (resolve =>{
        console.clear();
        console.log("********************".blue);
        console.log("   HOTEL  ".blue);
        console.log("********************".blue);
        console.log(`${'1.'.yellow}${' Reservar Habitacion'. green}`);
        console.log(`${'2.'.yellow}${' Habitaciones Sencillas'. green}`);
        console.log(`${'3.'.yellow}${' Habitaciones Dobles'. green}`);
        console.log(`${'4.'.yellow}${' Habitaciones Familiares'. green}`);
        console.log(`${'5.'.yellow}${' Fecha de Reserva'. green}`);
        console.log(`${'6.'.yellow}${' Borrar Reservas'. green}`);
        console.log(`${'7.'.yellow}${' Salir '. green}`);


    })
}











module.exports ={
    mostrarMenu,
}