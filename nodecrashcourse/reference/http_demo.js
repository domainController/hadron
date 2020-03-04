

const http = require('http');

// Create server object

http.createServer((req, res) => {
	// Write response
	res.write('Brad Traversy Crash Course');
	res.end()
}).listen(5000, () => console.log('Server running...'));


// 58:10
