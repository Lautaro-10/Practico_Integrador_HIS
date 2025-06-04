const { Admisiones, Paciente } = require('../models');
function listarAdmisiones(req, res) {
  Admisiones.findAll({
    include: Paciente
  })
    .then(admisiones => {
      res.render('admisiones', { admisiones });
    })
    .catch(error => {
      console.error('Error al obtener admisiones:', error);
      res.status(500).send('Error al obtener admisiones');
    });
}
module.exports = {
  listarAdmisiones
};
