// CONNEXION  SETTINGS

const axios = require("axios").default;
const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

// URL PARAMETERS

const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 
const ticketsEndpoint = '/tickets/cursor.json?start_time=';
const startTime = '1585267200'; // Fri Mar 27 00:00:00 GMT 2020


// FORMATING

const fs = require('fs');
// let utils = require('./utils');


///////////////////////////////////////////////////// EXPORTING TICKETS  ///////////////////////////////////////////////////////////////////////////

const getTickets = async url => {
   try {
    const response = await axios.get((`${baseURL}`+`${ticketsEndpoint}`+`${startTime}`),{
  headers: {'Authorization': `Basic ${token}`}
   })
    const tickets = response.data;
    let ticketsToText = JSON.stringify(tickets);

/*//  EXTRACTING CURSOR 

  var myFile = fs.readFileSync(ticketsToText,'utf8');
  var pattern = new RegExp(/"after_cursor":"(.*)","before_cursor/);
  var cursor = myFile.match(pattern);
  console.log(cursor[1]);*/


// CREATING A TIMESTAMP

    var timestamp = Math.round((new Date()).getTime() / 1000)

// EXPORTING TICKETS TO DISK

    fs.writeFile('./TicketsExport_'+ timestamp +'.txt', ticketsToText, function(err)
    {
      if (err) {
        console.log(err);
      }

});

  } catch (error) {
    console.log(error);
  }
};

// getTickets(`${baseURL}`+`${ticketsEndpoint}`+`${startTime}`); // Returns the tickets that changed since the start time

// EXTRACTING BEFORE_CURSOR 


// 