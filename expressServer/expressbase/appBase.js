var express = require('express');

//app contendra todos los metodos que vienen en express
var app = express();

var server = app.listen(3000, function(){

});

//independientemente del verbo de entrada(get, post)
//se va a mostrar esta respuesta
app.all('/', function(request, response){
    response.send("Hello world");
});

//solo funciona si el usuario accede
// con el metodo get
app.get('/about', function(req, res){
    res.send("ABOUT");
});

//solo funciona si el usuario accede
// con el metodo post
app.post('/about', function(req, res){
    res.send("ABOUT POST METHOD");
});



// Router==>rutas url
// cada peticion es enrutada hacia una direccion url