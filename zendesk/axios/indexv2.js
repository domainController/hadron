// NODE MODULE	
const fs = require('fs');
const glob = require('glob');

// CONNEXION SETTINGS

const axios = require("axios").default;
const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
axios.defaults.baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental';
const startFrom2019 = '/tickets/cursor.json?start_time=1546500000'; // Thu Jan  3 07:20:00 GMT 2019
const exportDir = '../export/';

// CHECK IF THE EXPORT DIR IS EMPTY
    if (fs.readdirSync(exportDir).length === 0){

// CONNECTING TO API WITH AN INITIAL START TIME
	axios({
    url: startFrom2019,
	headers: {'Authorization': `Basic ${token}`},
   })

// RETRIEVING DATA
    .then(response => {
    const tickets = response.data;
    console.log(response.status);

// CONVERTING JSON TO TEXT AND 
    let ticketsASCII = JSON.stringify(tickets);

// CREATING A TIMESTAMP
 	let timestamp = Math.floor(Date.now() / 1000);

// SAVING TICKETS TO DISK
    fs.writeFile('../export/Tickets_'+ timestamp , ticketsASCII, function(err)
    {
    	if (err) {
    		console.log(err);
    	}
  });
})
//HANDLING API CONNECTION ERRORS
    .catch(error => {
    console.log(error);
  })	
    } else {

// CHECK MOST RECENT FILE
	const newestFile = glob.sync('../export/*Tickets*')
  	.map(name => ({name, ctime: fs.statSync(name).ctime}))
  	.sort((a, b) => b.ctime - a.ctime)[0].name
	console.log('Most recent file is:'+ '' + newestFile) ;

// and EXTRACT AFTER CURSOR FROM IT
	let file = fs.readFile(newestFile, 'ASCII', function(err, doc) {
    let after_cursor = doc.match(/(?<=after_cursor\":\")(.*)(?=\",\"before_cursor)/g);
    console.log('The after_cursor variable look like this :'+ '' + after_cursor);

// then BUILD NEXT PAGE URL ENDPOINT
    const nextPage = '/tickets/cursor.json?cursor=' + after_cursor;
 	console.log('The next page url look like this :'+ '' +  nextPage);	


// CONNECTING TO API WITH CURSOR
	axios({
    url: nextPage,
	headers: {'Authorization': `Basic ${token}`},
   })

// RETRIEVING DATA
    .then(response => {
    const tickets = response.data;
    console.log(response.status);

// CONVERTING JSON TO TEXT
    let ticketsASCII = JSON.stringify(tickets);

// CREATING A TIMESTAMP
 	let timestamp = Math.floor(Date.now() / 1000);

// SAVING TICKETS TO DISK
    fs.writeFile('../export/Tickets_'+ timestamp , ticketsASCII, function(err)
    {
    	if (err) {
    		console.log(err);
    	}
  });
})
//HANDLING API CONNECTION ERRORS
    .catch(error => {
    console.log(error);
  })
		})
}




























/////////////////////////////////////////////////// ///  EXPORTING USERS (3/4) /////////////////////////////////////////////////////////////////////////////////

/*const getUsers = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${usersEndpoint}`+`${startTime}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const users = response.data;
    let usersToText = JSON.stringify(users);
    console.log(users);
    fs.writeFile('./incrementalUsersExport.txt', usersToText, function(err)
    {
    	if (err) {
    		console.log(err);
    	}
});

  } catch (error) {
    console.log(error);
  }
};

getUsers(`${baseURL}`+`${usersEndpoint}`+`${startTime}`);
// Returns a listing of all users*/





/*// Incremental Ticket Event (2/4)
const getTicketEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketEventsEndpoint}`+`${startTime}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getTicketEvents(`${baseURL}`+`${ticketEventsEndpoint}`+`${startTime}`);
// Returns a stream of changes that occurred on tickets.
*/

/*// Incremental Ticket Metric Events (1/4)
const getTicketMetricEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketMetricEventsEndpoint}`+`${startTime}`, {
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTicketMetricEvents(`${baseURL}`+`${ticketEndpoint}`+`${startTime}`);
// Returns ticket metric events that occurred on or after the start time*/

/*// ENDPOINTS 
const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 
const ticketsEndpoint = '/tickets/cursor.json?start_time=';
const ticketEventsEndpoint = '/ticket_events.json?start_time=';
const ticketMetricEventsEndpoint ='/ticket_metric_events.json?start_time=';
const usersEndpoint = '/users.json?start_time=';
const startTime = '1585267200'; // Fri Mar 27 00:00:00 GMT 2020*/
