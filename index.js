//Importar express(NodeJs), bodyParser (JSON) y modelo db
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = process.env.PORT || 5000;
//Hacerlos visibles(req.body)
app.use(bodyParser.json());
//Prefijo Rutas
app.use('/api/vehicles', require('./routes/vehicles'));
//Autenticación, modela la db (sequelize)
db.sequelize.authenticate()
  .then(() => {
    console.log('Base de datos conectada...');
    return db.sequelize.sync();
  })
  //Escuchando por el puerto definido
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:3306`);
    });
  })
  //Respuesta Error
  .catch(err => {
    console.error('Error: ' + err);
  });