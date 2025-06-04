const db = require('./models');

async function cargarDatos() {
  try {
    await db.sequelize.sync(); 
    const pacientes = await Promise.all([
      db.Paciente.create({ nombre: 'Lautaro', apellido: 'Cadelago', dni: '44993667' }),
      db.Paciente.create({ nombre: 'Ana', apellido: 'García', dni: '23456789' }),
      db.Paciente.create({ nombre: 'Luis', apellido: 'Peral', dni: '34567890' }),
      db.Paciente.create({ nombre: 'Sofía', apellido: 'López', dni: '45678901' }),
      db.Paciente.create({ nombre: 'Carlos', apellido: 'Gómez', dni: '56789012' }),
      db.Paciente.create({ nombre: 'Josefina',apellido: 'Perez', dni:'45223112'})
    ]);
    await Promise.all([
      db.Admisiones.create({ fecha: '2024-06-01', hora: '08:30', motivo: 'Dolor abdominal', pacienteId: pacientes[0].id }),
      db.Admisiones.create({ fecha: '2024-06-01', hora: '10:15', motivo: 'Fractura', pacienteId: pacientes[1].id }),
      db.Admisiones.create({ fecha: '2024-06-02', hora: '12:00', motivo: 'Fiebre alta', pacienteId: pacientes[2].id }),
      db.Admisiones.create({ fecha: '2024-06-02', hora: '14:20', motivo: 'Chequeo general', pacienteId: pacientes[3].id }),
      db.Admisiones.create({ fecha: '2024-06-03', hora: '09:45', motivo: 'Infección urinaria', pacienteId: pacientes[4].id }),
    ]);

    console.log('Datos cargados exitosamente.');
    process.exit(); 
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

cargarDatos();
