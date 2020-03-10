const express = require('express');
const router = express.Router();
const micronutrients = require(./'micronutrients.js');

// Get All micronutrients:

router.get('/api/micronutrients', (req, res) => {
	res.json(micronutrients);
});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get single micronutrient:

router.get('/api/micronutrients/:price', (req, res) => {
	
	const found = micronutrients.some(micronutrient => micronutrient.price === parseInt(req.params.price));

	if(found){
		res.json(micronutrients.filter(micronutrient => micronutrient.price === parseInt(req.params.price)));
	}
	else {
		res.status(400).json({ msg: `No micronutrient with price ${req.params.price}`});
	}
});


// Create a micronutrient

router.post('/api/micronutrients', (req, res) => {
	const newMicronutients = {
		
	}
});
module.exports = router;