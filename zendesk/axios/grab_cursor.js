const fs = require('fs');
//let str = ("null,"after_cursor":"MTU4NjA4OTg2MC4wfHw1fA==","before_cursor":")

let after_cursor = "(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)"
//let end_time = "(?<=end_time\":)(.*)(?=})"
// let result = str.match(regexp);
var file = fs.readFile('../export/Tickets_', 'ASCII', function(err, doc) {
    var end_time = doc.match(/(?<=end_time\":)(.*)(?=})/g);
    console.log(comments);
});
//console.log(result);



