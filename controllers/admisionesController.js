const db = require('../models');

db.Admisiones.findAll({ include: db.Paciente })
  .then(admisiones => {
    console.log(JSON.stringify(admisiones, null, 2));
  })
  .catch(err => console.error(err));