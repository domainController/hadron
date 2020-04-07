
const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 

// CURSOR PAGINATION:

const ticketsEndpoint = '/tickets/cursor.json?start_time=';
let before_cursor = '';

// LEGACY PAGINATION: 

const ticketEventsEndpoint = '/ticket_events.json?start_time=';
let endTimeTicketEvents = '';

const ticketMetricEventsEndpoint ='/ticket_metric_events.json?start_time=';
let endTimeTicketMetricEvents = '';

const usersEndpoint = '/users.json?start_time=';
let endTimeUsersEndpoint = '';


// DETERMINING LEGACY ENDPOINTS:

  if endTimeTicketEvents == null { 
  	let url = (`${baseURL}`+`${ticketEventsEndpoint}`+`${startTimeFirstRequest}`);
 }
 else let url = (`${baseURL}`+`${ticketEventsEndpoint}`+`${endTimeTicketEvents}`)

// DETERMINING CURSOR ENDPOINTS:

  if before_cursor == null { 
  	let url = (`${baseURL}`+`${ticketsEndpoint}`+`${startTimeFirstRequest}`);
 }
 else let url = (`${baseURL}`+`${ticketsEndpoint}`+`${before_cursor}`);

 

 	