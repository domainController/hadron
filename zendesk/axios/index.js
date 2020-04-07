// CONNEXION 
const axios = require("axios").default;
const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

// ENDPOINTS 

const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 
const ticketsEndpoint = '/tickets/cursor.json?start_time=';
const ticketEventsEndpoint = '/ticket_events.json?start_time=';
const ticketMetricEventsEndpoint ='/ticket_metric_events.json?start_time=';
const usersEndpoint = '/users.json?start_time=';

// TIMESTAMPS

const UnixTimeOfFirstRequest = '1585267200';
// Fri Mar 27 00:00:00 GMT 2020

let end_time = '';

// FORMATING

const fs = require('fs');
// let utils = require('./utils');

///////////////////////////////////////////////////// EXPORTING TICKETS (1/4) ///////////////////////////////////////////////////////////////////////////

// CHECK THE MOST RECENT FILES

const getTickets = async url => {
   try {
    const response = await axios.get((`${baseURL}`+`${ticketsEndpoint}`+`${UnixTimeOfFirstRequest}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const tickets = response.data;
    let ticketsToText = JSON.stringify(tickets);


// CREATING A TIMESTAMP

    var timestamp = Math.round((new Date()).getTime() / 1000)

// EXPORTING TICKETS TO DISK
	
    fs.writeFile('../export/Tickets_'+ timestamp +'.txt', ticketsToText, function(err)
    {
    	if (err) {
    		console.log(err);
    	}
});

  } catch (error) {
    console.log(error);
  }
};


getTickets(`${baseURL}`+`${ticketsEndpoint}`+`${UnixTimeOfFirstRequest}`); // Returns the tickets that changed since the start time


/////////////////////////////////////////////////// ///  EXPORTING USERS (3/4) /////////////////////////////////////////////////////////////////////////////////

/*const getUsers = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${usersEndpoint}`+`${UnixTimeOfFirstRequest}`),{
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

getUsers(`${baseURL}`+`${usersEndpoint}`+`${UnixTimeOfFirstRequest}`);
// Returns a listing of all users*/





/*// Incremental Ticket Event (2/4)
const getTicketEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketEventsEndpoint}`+`${UnixTimeOfFirstRequest}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getTicketEvents(`${baseURL}`+`${ticketEventsEndpoint}`+`${UnixTimeOfFirstRequest}`);
// Returns a stream of changes that occurred on tickets.
*/

/*// Incremental Ticket Metric Events (1/4)
const getTicketMetricEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketMetricEventsEndpoint}`+`${UnixTimeOfFirstRequest}`, {
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTicketMetricEvents(`${baseURL}`+`${ticketEndpoint}`+`${UnixTimeOfFirstRequest}`);
// Returns ticket metric events that occurred on or after the start time*/