const express  = require('express');
const app = express();
const micronutrients = require('./micronutrients.js');

app.get('/api/micronutrients', (req, res) => {
	 res.send(micronutrients);
});

app.get('/api/micronutrients/:description/:price', (req, res) => {
	res.send(req.params.description)	;
})
// PORT

const port = process.env.PORT || 8000;

app.listen(8000, () => console.log(`Listening on port ${port}...`));

// https://www.youtube.com/watch?v=pKd0Rpw7O48
// Express.js Tutorial: Build RESTful APIs with Node and Express | Mosh