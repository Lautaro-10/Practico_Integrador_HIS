const db = require('../database/connection');
function obtenerPacientes(callback) {
  db.query('SELECT * FROM pacientes', (error, resultados) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, resultados); 
    }
  });
}
module.exports = {obtenerPacientes};
