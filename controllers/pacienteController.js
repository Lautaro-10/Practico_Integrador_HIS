const { Paciente } = require('../models'); 

function listarPacientes(req, res) {
  Paciente.findAll()
    .then(pacientes => {
      res.render('pacientes', { pacientes });
    })
    .catch(error => {
      console.error('Error al obtener pacientes:', error);
      res.status(500).send('Error al obtener pacientes');
    });
}

module.exports = {
  listarPacientes
};
