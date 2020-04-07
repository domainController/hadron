const fs = require('fs')
const path = require('path');


var getMostRecent = function (dir, cb) {
	var dir = path.resolve(dir);
	var files = fs.readdir(dir, function (err, files) {
		var sorted = files.map(function(v) {
			var filepath = path.resolve(dir, v);
			return {
				name:v,
				time:fs.statSync(filepath).mtime.getTime()
			}; 
		})
		.sort(function(a, b) { return b.time - a.time; })
		.map(function(v) { return v.name; });

		if (sorted.length > 0) {
			cb(null, sorted[0]);
		} else {
			cb('Seems there is no files in this dir...');
		}
	})
}

getMostRecent('./', function (err, recent) {
	if (err) console.error(err);
	console.log(recent);
});
