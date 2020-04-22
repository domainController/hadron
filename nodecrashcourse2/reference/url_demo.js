const url = require('url');

const parallels = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL 
console.log(parallels.href);
console.log(parallels.toString());

// Host (root domain)
console.log(parallels.host);

// Hostname (does not get port)
console.log(parallels.hostname);

// Path name
console.log(parallels.pathname);

// Serialized URL 
console.log(parallels.search);

// Params object
console.log(parallels.searchParams);

// Add Params
parallels.searchParams.append('city', 'Hamburg');
console.log(parallels.searchParams);

// Loop through params
parallels.searchParams.forEach((value, name)=> console.log(`${name}:${value}`));
