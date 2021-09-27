var http = require('http');


var servidor = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write("Hello World for the url: " + request.url);
    response.end();
    console.log("request recieved");
})


servidor.listen(3000);

console.log("Ejecutando servidor NodeJS");