
const header = 'Authorization: Basic Y3Aua2VubW9lQGdtYWlsLmNvbS90b2tlbjo3VkJrTWRuc09CbDg2OVNnZXUwVHZScXg5U0hTQlpGeUpSbTRiYUJi';
let users_endpoint = 'https://admintestpatrice.zendesk.com/api/v2/incremental/users.json?start_time=1585267200';
let login = 'cp.kenmoe@gmail.com';
let password = 'royfielding';
let token = '7VBkMdnsOBl869Sgeu0TvRqx9SHSBZFyJRm4baBb';

// inspired by https://observablehq.com/@mbostock/fetch-with-basic-auth

fetch( `${users_endpoint}`, {
  headers: new Headers({
    "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
  }),
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();
})

const getTickets = () => {
 	fetch (`https://admintestpatrice.zendesk.com/api/v2/incremental/tickets/cursor.json?start_time=1585267200`)
	.then(res => res.json ())
	.then (tickets => console.log(tickets))
}
 
getTickets()	