const path = require('path');

// Full directory
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate Path
console.log(path.join(__dirname, 'test', 'hello.html'));
 
// 
console.log(path.resolve(__dirname, './client/dist'));