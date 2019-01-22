
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers')
const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));

// Express HBS Engie
hbs.registerPartials(__dirname + '/views/parciales');
app.set("view engine", "hbs");




app.get('/',  (req, res) => {
    // // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Danilo',
    //     edad: 29,
    //     url: req.url
    // }  

    res.render('home', {
        nombre: 'Danilo'        
    });

});

app.get('/about', (req, res) => {
    // // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Danilo',
    //     edad: 29,
    //     url: req.url
    // }  

    res.render('about');

});

app.listen(port, () => {
    console.log(`Ecuchando el puerto ${ port }`);
});