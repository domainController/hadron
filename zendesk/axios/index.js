// CONNEXION SETTINGS

const axios = require("axios").default;
const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
let uri ;

// NODE MODULE	

const fs = require('fs');
const shell = require('shelljs');
require('dotenv').config();

// WRITING API URL INTO A FILE

 if (shell.exec('. ./setUrlparameters.sh').code !== 0) {
  shell.echo('Error: failed to build endpoint url');
  shell.exit(1);
}

// RETRIEVING API URL

fs.readFile('./ticketsEndpointUrl', 'ASCII', function (err, data) {
 	if (err) { throw err };
	uri = data;
})


// DEFINING HOW TO CONNECT TO API

	const getTickets = async url => {
   try {
    const response = await axios.get((`${uri}`),{
	headers: {'Authorization': `Basic ${token}`}
   })

// RETRIEVING DATA

    const tickets = response.data;

// CONVERTING JSON STREAM TO TEXT

    let ticketsToText = JSON.stringify(tickets);

// CREATING A TIMESTAMP

 	var timestamp = Math.round((new Date()).getTime() / 1000)

// SAVING TICKETS TO DISK

    fs.writeFile('../export/Tickets_'+ timestamp +'.txt', ticketsToText, function(err)
    {
    	if (err) {
    		console.log(err);
    	}
});

// HANDLING API CONNECTION ERRORS
  } catch (error) {
    console.log(error);
  }
};

// EVENTUALLY RUNNING THE SCRIPT DEFINED ABOVE 

getTickets('url'); // Returns the tickets that changed since the start time


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
