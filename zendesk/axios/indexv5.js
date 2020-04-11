// NODE MODULE	
const fs = require('fs');
const axios = require("axios").default;

// CONNEXION SETTINGS


const username = 'cp.kenmoe@gmail.com';
const password = 'royfielding';
const token = Buffer.from(`${username}:${password}`,'utf8').toString('base64');
axios.defaults.headers.common = {'Authorization': `Basic ${token}`};

// CONNECTING TO API WITH AN INITIAL START TIME
	axios({ 
    baseURL: 'https://admintestpatrice.zendesk.com/api/v2/incremental',
    url: '/tickets/cursor.json',
    params: {
        start_time: 1546500000 // Thu Jan  3 07:20:00 GMT 2019
      }
   })
    .then(response => { // RETRIEVING DATA
    const tickets = response.data;
       // CONVERTING JSON TO TEXT AND 
    let ticketsASCII = JSON.stringify(tickets);
    // CREATING A TIMESTAMP
    let timestamp = Math.floor(Date.now()/1000);
    // SAVING TICKETS TO DISK
    fs.writeFile('../export/Tickets_'+ timestamp , ticketsASCII, function(err)
{
    if (err) {
        console.log(err);
    }
    });
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.config);
 // console.log(response.headers);
    })
//HANDLING API CONNECTION ERRORS
    .catch(error => {
    console.log(error);
 

})