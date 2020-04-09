const fs = require('fs');

var file = fs.readFile('../export/Tickets_1586376434', 'ASCII', function(err, doc) {
    var after_cursor = doc.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);
    console.log(after_cursor);
});

var fichier = fs.readFile('../export/Tickets_1586376434', 'ASCII', function(err, doc) {
    var end_time = doc.match(/(?<=end_time\":)(.*)(?=})/g);
    console.log(end_time);
});
