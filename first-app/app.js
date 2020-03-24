// Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh
// https://www.youtube.com/watch?v=TlB_eWDSMt4 
// TIMER : 30:50

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged',  (arg) => {
	console.log('Listener called', arg );
});

// Raise an event
emitter.emit('messageLogged');

/*const os = require('os');
const fs = require('fs');
*/
/*const files = fs.readdirSync('./');
console.log(files);*/

/*fs.readdir('./', function(err, files) {
	if (err) console.log('Error', err);
	else console.log('Result', files);
});*/
/*
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

*/
/*const logger = require('./logger.js');
const  path =  require('path'); // path module
 var pathObj = path.parse(__filename); 

 console.log(pathObj);*/

/*function sayHello(name) {
	console.log ('Hello ' + name);
}

// sayHello('Mosh');*/

/*logger.log('message');*/

