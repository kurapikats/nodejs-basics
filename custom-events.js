/**
 * Create and listen to custom events
 */
var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

// listen on error event
logger.on('error', function(message) {
  console.log('ERR: ' + message);
});

// emit an error event
logger.emit('error', 'Eror message 1');
logger.emit('error', 'Eror message 2');
