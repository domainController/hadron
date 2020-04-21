const path = require('path');
const fs = require('fs');


// Create folder
/* fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('folder created...');
}); */

// Create and write to file

/* fs.writeFile(path.join(__dirname, '/test', 'cities.txt'), 
    'Hamburg, Dublin ,', 
    err => {
    if(err) throw err;
    console.log('File witten to...');
        // Append to file
    fs.appendFile(path.join(__dirname, '/test', 'cities.txt'), 
    'Barcelone, Amsterdam', 
    err => {
    if(err) throw err;
    console.log('File witten to...');
    });
}); */

// Overwrite to file

/* fs.writeFile(path.join(__dirname, '/test', 'cities.txt'), 
    'Barcelone, Amsterdam', 
    err => {
    if(err) throw err;
    console.log('File witten to...');
}); */

// Read file

/* fs.readFile(path.join(__dirname, '/test', 'cities.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
}); */

// Rename file

fs.rename(path.join(__dirname, '/test', 'cities.txt'), path.join(__dirname, '/test', 'Neustädter31.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed...');
});