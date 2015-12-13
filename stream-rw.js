/**
 * Example of file read/write
 */
var fs = require('fs');

var file = fs.createReadStream('index.js');
var newFile = fs.createWriteStream('./generated/index_copy.js');
