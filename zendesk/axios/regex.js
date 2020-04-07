const nip = require('nip');

var regex = /end_time/;



nip 'function(l) { return /^end_time/.test(l); }' end_time_extract.txt





/*const awk = require('awk');
const fs = require('fs');

awkscript = fs.readFileSync( '__./demo.awk'),
data = fs.readFileSync( '__./incrementalUserExport.txt');

var result = awk(awkscript, data);
 
console.log(result.exit_code);
console.log(result.stdout);
console.log(result.stderr);*/