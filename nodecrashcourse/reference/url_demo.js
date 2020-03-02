const url = require('url');

const myURL = url.parse('http://mywebsite.com/hello.html?id=100&status=active');

/*Above I have used "url.parse insted of new URL constructor as shown here https://nodejs.org/api/url.html
 When using new URL command is failing "ReferenceError: URL is not defined"*/

// Serialized URL

console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)

 console.log(myURL.host);

// Hostname ( does not get port)

 console.log(myURL.hostname);

// Pathname 

 console.log(myURL.pathname);