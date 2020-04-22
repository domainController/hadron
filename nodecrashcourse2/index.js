const http = require('http');
const path = require('path');
const fs = require('fs');
const micronutrients = require('./micronutrients');

const server = http.createServer((req, res)=> {
    if (req.url === '/api/micronutrients') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(micronutrients));
        }});

const PORT = process.env.PORT || 5000 ;

server.listen( PORT, () =>  console.log(`Server running on port ${PORT}`));