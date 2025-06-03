const db = require('./models');

db.Paciente.findAll()
  .then(pacientes => {
    console.log('Pacientes encontrados:', pacientes.map(p => p.toJSON()));
  })
  .catch(err => {
    console.error('Error al obtener pacientes:', err);
  });
