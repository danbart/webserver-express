


const http = require('http');

//creamos el servidor quien resivel el request como la respuesta
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type':'application/json'});

      let salida = {
          nombre: 'Danilo',
          edad: 29,
          url: req.url
      }  

    // res.write('hola mundo');
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');