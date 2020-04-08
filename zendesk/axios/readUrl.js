const fs = require('fs');


 fs.readFile('./ticketsEndpointUrl', 'ASCII', function (err, data) {
	let urlocal = data;
	url = urlocal  ;
	console.log(url);
})

/*let url = fs.readFileSync('./ticketsEndpointUrl', 'ASCII');
console.log(url);
*/

//const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


/*let url = fs.readFileSync("./ticketsEndpointUrl.txt").toString();
console.log(url);*/


