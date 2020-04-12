const fs = require('fs');
let regexpCursor = /(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g;
let newestFile = '../export/Tickets_1586622582';

// let newestExport = fs.readFileSync(newestFile).toString();
let afterCursor = fs.readFileSync(newestFile).toString().match(regexpCursor);
console.log(`${afterCursor}`);




































  /*   console.log('2B- Furthermore there is no more new tickets to retrieve: End of script ! ');
    return;
        } else {
    console.log(`2- The after_cursor look like this: ${afterCursor}`);
        }
    }

    road(); */

/* let extractCursor = fs.readFile(newestFile, 'ASCII', function(error, newestFile) {
    if (error) {
        console.log('Error:- ' + error);
        throw error;
    } else if ((newestFile.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g)) === null) {
        console.log(`The value of after_cursor is ${afterCursor}`)
        console.log('2 - There is no more new tickets to retrieve: End of script ! ');
        return;
    } else {
        let afterCursor = newestFile.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);
        console.log(`2 - The after_cursor look like this: ${afterCursor}`);
  }
}); */