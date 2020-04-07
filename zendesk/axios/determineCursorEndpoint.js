const baseUrl = 'https://admintestpatrice.zendesk.com/api/v2/incremental'; 
const endpoint = '/tickets/cursor.json?start_time=';
const startTime = '1585267200'; // Fri Mar 27 00:00:00 GMT 2020
let afterCursor = '';

function setUrlParameters = (baseUrl, endpoint, page ) {

    if (after_cursor === null) { 
      let url = ( baseURL +  endpoint + startTime ;
    }
      else 
      {
          let url = baseUrl + endpoint + afterCursor);
      }
}


console.log(url);