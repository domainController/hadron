const fs = require('fs');
const glob = require('glob')

// CHECK MOST RECENT FILE
const newestFile = glob.sync('../export/*Tickets*')
  .map(name => ({name, ctime: fs.statSync(name).ctime}))
  .sort((a, b) => b.ctime - a.ctime)[0].name;
console.log(newestFile);

// EXTRACT AFTER CURSOR
  var file = fs.readFile(newestFile, 'ASCII', function(err, doc) {
    var after_cursor = doc.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);
    console.log(after_cursor);
});