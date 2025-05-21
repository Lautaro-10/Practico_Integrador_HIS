const modeloPaciente = require('./models/pacienteModel');

modeloPaciente.obtenerPacientes((err, pacientes) => {
  if (err) {
    console.error('Error obteniendo pacientes:', err);
  } else {
    console.log('Pacientes encontrados:', pacientes);
  }
});
