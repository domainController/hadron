const fs = require('fs');

let newestFile = '../export/Tickets_1586552127'
let after_cursor = newestFile.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g) ;
console.log('The after_cursor variable look like this :'+ '' + after_cursor);


//let str = ("null,"after_cursor":"MTU4NjA4OTg2MC4wfHw1fA==","before_cursor":")
//let end_time = "(?<=end_time\":)(.*)(?=})"
// let result = str.match(regexp);
// var file = fs.readFile('../export/Tickets_1586424142', 'ASCII', function(err, doc) {
//     let after_cursor = doc.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);

// });
//console.log(result);



