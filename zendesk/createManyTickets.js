var $ = require('jQuery');

for(x=0; x<20; x++) {
  var title = "Ticket #" + x;
  var subject = "Test ticket #" + x;
  var body = "This is test ticket #" + x;
  $.ajax({
    url: '/api/v2/tickets.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({"ticket": {"subject": subject , "comment": { "body": "commentaire" }}})
  });
}

// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
