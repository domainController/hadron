
// SERVER TCP

var net = require('net');

var server = net.createServer(function(socket)

{
	console.log("Nouvelle connexion depuis l'ip: " + socket.remoteAdress);
	socket.end("Mon premier serveur TCP");
});


server.listen("3000");
console.log("Server is currently listening on TCP port 3000");

// HTTP SERVER

/*var http = require('http');

var server = http.createServer(function(request, response)

{
	response.writeHead(200, {"Content-Type": "Text/plain"});
	response.end("Hello World\n");
});

server.listen("3000");
console.log("Pas de panique !! Le server est actuellement en ecoute sur le port 3000")

*/
