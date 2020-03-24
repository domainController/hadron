// AGAIN Express.js Tutorial: Build RESTful APIs with Node and Express | Mosh

const express = require('express');
const app = express();

app.get('/',(req, res) => {
	res.send('Hello World');
});

app.get('/api/micronutrients', (req,res) => {
// 13m54s
})

app.listen(8000, () => console.log('listening on port 8000...'));