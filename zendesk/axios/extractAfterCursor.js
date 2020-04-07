const fs = require('fs');


	var myFile = fs.readFileSync('TicketsExport_1586265005.txt','utf8');
	var pattern = new RegExp(/"after_cursor":"(.*)","before_cursor/);
	var cursor = myFile.match(pattern);
	var after_cursor = console.log(cursor[1]);