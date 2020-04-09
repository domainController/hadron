const fs = require('fs');


fs.readFile('./ticketsEndpointUrl', 'ASCII', function (err, data) {
 	if (err) { throw err };
	uri = data;
	console.log(("\'"+`${uri}`+ "\'"));
})

/*let url = fs.readFileSync('./ticketsEndpointUrl', 'ASCII');
console.log(url);
*/

//const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


/*let url = fs.readFileSync("./ticketsEndpointUrl.txt").toString();
console.log(url);*/


