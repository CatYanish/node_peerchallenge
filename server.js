var http = require('http');
var randomNumber = require('./modules/randomNumber.js');
var convert = require('./modules/convertToDollars.js');
var moduleThree = require('./modules/moduleThree.js');

console.log(moduleThree);


var server = http.createServer(function(request, response) {
  console.log('$' + convert(100000));
  console.log(randomNumber(100, 1000000));
  console.log('Request Received');
  response.writeHead(200);
  response.write(moduleThree.accountBalance());
  response.write("$" + moduleThree.randomConverter(100, 1000000));
  response.end();
});


server.listen(3000);
console.log('listening on port 3000');
