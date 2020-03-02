const fs = require('fs');
const path = require('path');

/*// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if (err) throw err;
	console.log('Folder created....')
	});*/

// Create an write a file

/*fs.writeFile(path.join(__dirname, '/test', 'Supplements.txt'), 
	'Micronutrients, Proteins and Nootropics', 
	err => 
	{
		if (err) throw err;
		console.log('File written to....');
	}
);*/

// Read file

/*fs.readFile(path.join
	(__dirname, '/test', 'Supplements.txt'), 'utf-8', 
	(err, data) => 
	{
		if (err) throw err;
		console.log(data);
	});*/

// Rename file

fs.rename(
	path.join(__dirname, '/test', 'Supplements.txt'), 
	path.join(__dirname, '/test', 'Supplementation.txt'), 
	(err) => 
		{
			if (err) throw err;
			console.log('File renamed...');
		});