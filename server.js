/**
 * Create basic http server listening on port 8080
 * Output sample text on console and browser
 */
var http = require('http');

var server = http.createServer(function(request, response) {
  console.log('Hello Console');

  response.writeHead(200);
  response.write('Hello Browser');
  response.end();

}).listen(8080);

console.log('Listening on port 8080...');
