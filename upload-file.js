/**
 * File Uploader
 * To use:
 * curl --file-upload xyz.jpg http://localhost:8080
 */
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  // this is where target file to upload
  var newFile = fs.createWriteStream('./generated/new-uploaded-file.xyz');
  // get the file length so that we could create a progress notification
  var fileBytes = request.headers['content-length'];
  // this will hold the current
  var uploadedBytes = 0;

  // pass the request data to create it as the new file
  request.pipe(newFile);

  // event listener to update user the upload progress
  request.on('data', function(chunk) {
    uploadedBytes += chunk.length;
    var progress = (uploadedBytes / fileBytes) * 100;
    response.write('progress: ' + parseInt(progress, 10) + '%\n');
  });

  // notify when finished uploading
  request.on('end', function() {
    response.end('Uploaded!');
  });
}).listen(8080);
