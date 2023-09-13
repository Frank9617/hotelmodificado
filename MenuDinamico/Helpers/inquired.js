require("colors");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer?",
    choices: [
      {
        value: "1",
        name: `${"1."} Reservar Habitacion`,
      },
      {
        value: "2",
        name: `${"2."} Habitaciones Sencillas`,
      },
      {
        value: "3",
        name: `${"3."} Habitaciones Dobles`,
      },
      {
        value: "4",
        name: `${"4."} Habitaciones Familiares`,
      },
      {
        value: "5",
        name: `${"5."} Fecha de Reserva`,
      },
      {
        value: "6",
        name: `${"6."} Borrar Reservas`,
      },
      {
        value: "7",
        name: `${"7."} Salir`,
      }, 
    ],
  },
];

const inquirerMenu = async () => {
  console.log("********************".blue);
  console.log("   HOTEL ".blue);
  console.log("********************".blue);

  let otp  = '';

  const opt = await prompt (preguntas).then (data =>{
    otp=data ['opcion']

  })
  return otp;
};





const pausa = async () => {
    const question =[
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]
    let pau = '';
    console.log('\n');
    await inquired.prompt(question).then(data => {
        pau = data['message']
    });
    return pau;

}
const leerInput = async () =>{
    const question = [
        {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if (value-length === 0 ){
                return 'Por favor ingrese un valor'
            }
            return true;
        }
        }
    ]
}
const reservarHabitacion = async () => {
  console.log('Reservar Habitación');
  
  // Aquí puedes utilizar inquirer para solicitar información necesaria para la reserva.
  const datosReserva = await inquirer.prompt([
      {
          type: 'input',
          name: 'nombre',
          message: 'Ingrese su nombre:',
      },
      {
          type: 'input',
          name: 'fechaEntrada',
          message: 'Fecha de entrada (YYYY-MM-DD):',
      },
      {
          type: 'input',
          name: 'fechaSalida',
          message: 'Fecha de salida (YYYY-MM-DD):',
      },
      // Otros campos que necesites para la reserva
  ]);

  // Aquí puedes implementar la lógica para guardar la reserva en tu sistema de habitaciones
  // Puedes utilizar una base de datos, un archivo JSON o cualquier otro método que prefieras.

  // Ejemplo de cómo guardar la reserva en un objeto:
  const reserva = {
      nombre: datosReserva.nombre,
      fechaEntrada: datosReserva.fechaEntrada,
      fechaSalida: datosReserva.fechaSalida,
      // Otros campos de la reserva
  };

  console.log('Habitación reservada con éxito!');
  console.log('Información de la reserva:', reserva);
};








module.exports ={
    inquirerMenu,
    pausa,
    leerInput
}