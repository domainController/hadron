var OKCupid = require('okcupidjs');
var okc = new OKCupid();

// USAGE
/* okc.login("username", "password", function(err, res, body) {
    console.log("done!");
  }); */

// OKCupid.js Example Code Request https://github.com/tranhungt/okcupidjs/issues/15
/* okc.login('okc_username/email', 'okc_password', function(err, res, body) {
    okc.getQuickmatch(function(err, res, body) {
        okc.like(body.tuid);
    }) 
 */
/* okc.login("Kami/4Asdf!No*", "screen.objects@gmail.com", function(err, res, body) {
    okc.getVisitors(function(err, res, body){
        console.log(res);
      console.log(body);
    })
}) */

okc.login("Kami/4Asdf!No*", "screen.objects@gmail.com", function(err, res, body) {
  okc.getQuickmatch(function(err, res, body) {
      okc.like(body.tuid);
  }) 
})