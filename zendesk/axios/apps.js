const fs = require('fs');
const glob = require('glob')
const exportDir = '../export/';


// CHECK MOST RECENT FILE
let newestFile = glob.sync(`${exportDir}/Tickets*`)
.map(name => ({name, ctime: fs.statSync(name).ctime}))
.sort((a, b) => b.ctime - a.ctime)[0].name
console.log('1- Most recent file is:'+ '' + newestFile) ;
module.exports = newestFile

// and EXTRACT AFTER CURSOR FROM IT



/* let cursorRoad = function extractCursor(){ 
    if (afterCursor === null) {
console.log('2 - There is no more new tickets to retrieve: End of script ! ');
return;
    } else {
console.log(`2 - The after_cursor look like this: ${afterCursor}`);
    }
}
module.exports = cursorRoad  */
    