const fs = require('fs');

var myFile = fs.readFileSync('./incrementalUserExport.txt','utf8');
var pattern = new RegExp(/"end_time":(.*)(?:})/);
var end_time = myFile.match(pattern);
console.log(end_time[1]);

// CMS-Server:Port" valuetext="15000" value="15000"
// var pattern = new RegExp(/CMS-Server:Port"\s+valuetext="(.*)"\s+value/);