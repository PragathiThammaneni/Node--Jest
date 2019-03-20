var http = require('http');
var userCount =0;
http.createServer(function (request,response){
    userCount++;
    response.writeHead(200,{'Content-type': 'text/plain'});
    response.write("User hits "+userCount);
    response.end();
    
}).listen(8080);

console.log('Server started');
