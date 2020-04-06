// CONNEXION 
const axios = require("axios").default;
const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

// ENDPOINTS 

const initialTime = '1585267200';
// Fri Mar 27 00:00:00 GMT 2020

const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental';

//is cursor pagination where string 'cursor' appears within url as shown below 
const ticketsEndpoint = '/tickets/cursor.json?start_time=';
const ticketEventsEndpoint = '/ticket_events.json?start_time=';
const ticketMetricEventsEndpoint ='/ticket_metric_events.json?start_time=';
const userEndpoint = '/users.json?start_time=';
// ticket event export namely is legacy pagination only
// with a next_page variable which itself includes a end_time varibale


// Incremental Ticket Export (1/4)
const getTickets = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketsEndpoint}`), {
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTickets(console.log(`${baseURL}`+`${ticketEndpoint}`+`${initialTime}`));
// Returns the tickets that changed since the start time

// Incremental Ticket Event (2/4)
const getTicketEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketEventsEndpoint}`+`${initialTime}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getTicketEvents(console.log(`${baseURL}`+`${ticketEventsEndpoint}`+`${initialTime}`));
// Returns a stream of changes that occurred on tickets.

// Incremental User Export (3/4)
const getUsers = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${usersEndpoint}`+`${initialTime}`),{
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers(console.log(`${baseURL}`+`${usersEndpoint}`+`${initialTime}`);
// Returns a listing of all users

// Incremental Ticket Metric Events (1/4)
const getTicketMetricEvents = async url => {
  try {
    const response = await axios.get((`${baseURL}`+`${ticketsEndpoint}`), {
	headers: {'Authorization': `Basic ${token}`}
   })
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getgetTicketMetricEvents(console.log(`${baseURL}`+`${ticketEndpoint}`+`${initialTime}`));
// Returns ticket metric events that occurred on or after the start time