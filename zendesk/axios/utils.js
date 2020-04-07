const fs = require('fs');


// SETTING URL

const baseUrl = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 
const endpoint = '/tickets/cursor.json?start_time=';
const startTime = '1585267200'; // Fri Mar 27 00:00:00 GMT 2020
let afterCursor = '';

module.exports = {

	setUrlParameters: function() {
	    if (after_cursor === null) { 
	      let url = ( baseURL +  endpoint + startTime ;
	    }
	      else 
	      {
	          let url = baseUrl + endpoint + afterCursor);
	      }
	}


// EXTRACTING AFTER CURSOR 

/*module.exports = {
getAfterCursor: function(){
	var myFile = fs.readFileSync(ticketsToText,'utf8');
	var pattern = new RegExp(/"after_cursor":"(.*)","before_cursor/);
	var cursor = myFile.match(pattern);
	var after cursor = console.log(cursor[1])
}};
*/


// CURSOR PAGINATION:

/*const ticketsEndpoint = '/tickets/cursor.json?start_time=';
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
 else let url = (`${baseURL}`+`${ticketEventsEndpoint}`+`${endTimeTicketEvents}`)*/
