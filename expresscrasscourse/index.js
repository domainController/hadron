// Express JS Crash Course
// https://www.youtube.com/watch?v=L72fhGm1tfE&t=743s

const express = require('express');
const path = require('path');

const micronutrients = require('./micronutrients.js');
const app = express();

const logger = require('./middleware/logger.js');

// Init middle ware
// app.use(logger);

// Get All micronutrients
app.get('/api/micronutrients', (req, res) => {
	res.json(micronutrients);
});

// Get single micronutrient
app.get('/api/micronutrients/:price', (req, res) => {
	
	const found = micronutrients.some(micronutrient => micronutrient.price === parseInt(req.params.price));

	if(found){
		res.json(micronutrients.filter(micronutrient => micronutrient.price === parseInt(req.params.price)));
	}
	else {
		res.status(400).json({ msg: `No micronutrient with price ${req.params.price}`});
	}
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
