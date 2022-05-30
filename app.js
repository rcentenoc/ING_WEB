const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();

// settings
app.set('port', process.env.PORT || 3000); // process.env.PORT es una variable de entorno que se define en el archivo .env
app.set('views', path.join(__dirname, 'views')); // __dirname es una variable global que indica la ruta del archivo actual
app.set('view engine', 'ejs'); // ejs es un motor de plantillas

// middlewares
app.use((req, res, next) => {
    console.log(`${req.url} METHOD: -${req.method}`); // req.url es una variable global que indica la url actual
    next();
});

app.use(bodyParser.urlencoded({ extended: false })); // bodyParser.urlencoded es un middleware que permite parsear el body de una petición
app.use(bodyParser.json()); // bodyParser.json es un middleware que permite parsear el body de una petición

// routes
app.use('/', routes); // '/' es la ruta principal

// static files
app.use(express.static(path.join(__dirname, 'public'))); // uniremos directorios

// start the server
app.listen(app.get('port'), () => { // app.get('port') es una variable que se define en el archivo .env
    console.log(`Server on port ${app.get('port')}`);
});
