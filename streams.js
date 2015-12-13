var http = require('http');

/**
 * Streams
 * How to read from the request?
 * Readable Stream inherits from EventMitter
 * Readable Stream emits events -> data, end
 * To use: curl -d helloworld http://localhost:8080
 */
http.createServer(function(request, response) {
  response.writeHead(200);

  /* read the request data and output on browser */

  // begin long version
  request.on('data', function(chunk) {
    console.log(chunk.toString());
    response.write(chunk);
  });

  request.on('end', function() {
    response.end();
  });
  // end long version

  // begin short version
  request.pipe(response);
  // end short version
}).listen(8080);
