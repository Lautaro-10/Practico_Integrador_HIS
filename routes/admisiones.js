const express = require('express');
const router = express.Router();
const admisionesController = require('../controllers/admisionesController');

router.get('/', admisionesController.listarAdmisiones);

router.get('/nueva', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.render('nuevaAdmision', { pacientes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar pacientes');
  }
});

router.post('/nueva', async (req, res) => {
  const { fecha, hora, motivo, pacienteId } = req.body;
  try {
    await Admisiones.create({ fecha, hora, motivo, pacienteId });
    res.redirect('/admisiones');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar admisión');
  }
});

module.exports = router;
