import fetch from 'node-fetch';

const header = 'Authorization: Basic Y3Aua2VubW9lQGdtYWlsLmNvbS90b2tlbjo3VkJrTWRuc09CbDg2OVNnZXUwVHZScXg5U0hTQlpGeUpSbTRiYUJi';
let endpoint = 'https://admintestpatrice.zendesk.com/api/v2/incremental/users.json?start_time=1585267200';
let login = 'cp.kenmoe@gmail.com';
let password = 'royfielding';
let token = '7VBkMdnsOBl869Sgeu0TvRqx9SHSBZFyJRm4baBb';

// inspired by https://observablehq.com/@mbostock/fetch-with-basic-auth

fetch(`${endpoint}`, {
  headers: new Headers {
  	`${header}`
  },
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();
})


//"Authorization": `Basic ${base64.encode(`${login}:${password}`)}`

const promise = fetch("https://admintestpatrice.zendesk.com/api/v2/incremental/users.json?start_time=1585267200", {
  headers: new Headers({
  	"Authorization: Basic Y3Aua2VubW9lQGdtYWlsLmNvbS90b2tlbjo3VkJrTWRuc09CbDg2OVNnZXUwVHZScXg5U0hTQlpGeUpSbTRiYUJi"
	}),
// inspired by https://www.youtube.com/watch?v=vn3tm0quoqE&t=200s
}).then(res => res.json ())
  .then(user => console.log('Waouh', user.id))

  console.log('Synchrone');

