const unix_time = '1585267200';
const baseURL = 'https://admintestpatrice.zendesk.com/api/v2/';
const endpoint = 'incremental/tickets/cursor.json?start_time=';



console.log(`${baseURL}`+`${endpoint}`+`${unix_time}`);