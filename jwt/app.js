const express = require('express'); 
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Premiers pas avec JWT'
	});
});

app.post('/api/posts', (req, res) => {
	res.json({
	message: 'Post created...'
	});
});

// Mock user
 const user ={
 	id: 1,
 	username: 'kami',
 	email: 'screen.objects@gmail.com',

 }

app.post('/api/login', (req, res) => {
	jwt.sign();
});



app.listen(8000, () => console.log('Server listening on port 8000'));