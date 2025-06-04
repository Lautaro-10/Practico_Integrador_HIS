const express = require('express');

const app = express();
const path = require('path');
const rutasInicio = require('./routes/inicio');

const rutasAdmisiones = require('./routes/admisiones');
app.use('/admisiones', rutasAdmisiones);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
const rutasPacientes = require('./routes/pacientes');
app.use('/', rutasPacientes);
app.use('/inicio', rutasInicio);
app.get('/', (req, res) => {
  res.redirect('/inicio');
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

