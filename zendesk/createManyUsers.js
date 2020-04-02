var $ = require('jQuery');

for(x=0; x<20; x++) {
  var name = "User #" + x;
  var email = "User" + x + "@testuser.com";
  $.ajax({
    url: '/api/v2/users.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({user:{name: name, email:email}})
  });
}

curl https://{subdomain}.zendesk.com/api/v2/tickets.json \
  -v -u {email_address}:{password}
