// Librerias necesarias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//requerimos el archivo de configuracion
const config = require('./config');
// Parseo a JSON de las respuestas
app.use( bodyParser.json() );
// Usamos Cors para permitir conexiones externas
app.use( cors() );

// llamamos a nuestras rutas
require( './app/route' )( app );
// levantamos el servidor desde el puerto de configuracion
app.listen( config.port );

// exportamos
module.exports = app;