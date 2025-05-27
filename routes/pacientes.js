const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/pacientes', pacienteController.listarPacientes);

module.exports = router;
