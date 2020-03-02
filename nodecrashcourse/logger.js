const EventEmitter = require('events');

const uuid = require('uuid');

console.log(uuid.v4());

class logger extends EventEmitter {
	log(msg)
}
// 51:43 https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2751s