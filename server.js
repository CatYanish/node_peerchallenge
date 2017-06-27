var http = require('http');
var randomNumber = require('./modules/randomNumber.js');
var c = require('./modules/convertToDollars.js');





var server = http.createServer(function(request, response) {
  console.log(c(100000));
  console.log(randomNumber(100, 1000000));
  console.log('Request Received');
  response.writeHead(200);
  response.write('request received');
  response.end();

});


server.listen(3000);
console.log('listening on port 8000');
