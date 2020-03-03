const EventEmitter = require('events');

const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
	log(msg) {
	// call event 
	 this.emit('message', { id: uuid.v4(), msg });
	}
}
// 51:43 https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2751s

module.exports =  Logger ;
