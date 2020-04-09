const fs = require('fs');
const startFrom2019 = '/tickets/cursor.json?start_time=1546500000'; // Thu Jan  3 07:20:00 GMT 2019
const exportDir = '../export/';
const glob = require('glob');

// CHECK IF THERE IS A FILE
    if (fs.readdirSync(exportDir).length === 0){
// EMPTY then BUILD AN URL WITH INITIAL START TIME
    	url = startFrom2019;
    	console.log(url);
    } else {
   // CHECK MOST RECENT FILE
	const newestFile = glob.sync('../export/*Tickets*')
  	.map(name => ({name, ctime: fs.statSync(name).ctime}))
  	.sort((a, b) => b.ctime - a.ctime)[0].name
	console.log('Most recent file is:'+ '' + newestFile) ;
// and EXTRACT AFTER CURSOR
	let file = fs.readFile(newestFile, 'ASCII', function(err, doc) {
    let after_cursor = doc.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);
    console.log('The after_cursor variable look like this :'+ '' + after_cursor);
    // then BUILD NEXT PAGE URL ENDPOINT
    const nextPage = '/tickets/cursor.json?cursor=' + after_cursor;
 	console.log('The next page url look like this :'+ '' +  nextPage);	
		})

}






/*
// then BUILD NEXT PAGE URL ENDPOINT
    const nextPage = '/tickets/cursor.json?cursor=' + after_cursor;
 	console.log(nextPage);
	});
	};*/

