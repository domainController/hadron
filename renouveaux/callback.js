// ECRIVONS NOTRE PREMIER CODE ...BLOQUANT Mbsu-9RDlik

/*var fs = require('fs');

var data = fs.readFileSync('supplements.txt');

console.log(data.toString());

console.log("Execution termine");
*/


// CALLBACK , ASYNCHRONOUS


var fs = require('fs');

fs.readFile('supplements.txt', function(err, data){
	if(err) console.log(err);
	console.log(data.toString());

});

console.log("Execution termine");
