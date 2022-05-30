const express = require('express'); // importar express
const router = express.Router(); // router es una variable que se define en el archivo express

router.get('/', (req, res,next) => { // Primer endpoint
    res.render('index',{
        title: 'SERVIDOR INGENIERÍA WEB',
        message: 'INICIO'
    }) // renderizar la vista index.ejs
});
// ------------------------------------------------------------
router.get('/poems', (req, res, next) => { // Segundo endpoint
    res.render('poems',{
        title: 'POEMS',
        message: 'POEMAS',
        poems: poemas
    }) // renderizar la vista poems.ejs
});
const poemas = [
    {title: 'Aquí',poema: 'Mis pasos en esta calle Resuenan En otra calle Donde Oigo mis pasos Pasar en esta calle Donde Sólo es real la niebla.', autor: 'Octavio Paz'},
    {title: 'Cada vez que pienso en tí',poema: 'Cada vez que pienso en ti, mis ojos rompen en llanto; y muy triste me pregunto, ¿por qué te quiero tanto?', autor: 'Anonimo'},
    {title: 'En las noches claras',poema: 'En las noches claras, resuelvo el problema de la soledad del ser. Invito a la luna y con mi sombra somos tres.', autor: 'Gloria Fuentes'},
]        
module.exports = router; // exportar router

