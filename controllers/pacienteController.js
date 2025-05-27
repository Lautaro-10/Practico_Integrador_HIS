const modeloPaciente = require('../models/pacienteModel');

function listarPacientes(req, res) {
  modeloPaciente.obtenerPacientes((err, pacientes) => {
    if (err) {
      res.status(500).send('Error al obtener pacientes');
    } else {
      res.render('pacientes', { pacientes: pacientes });
    }
  });
}
module.exports = {
  listarPacientes
};
