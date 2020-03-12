const Joi = require('joi');
const express  = require('express');
const app = express();
app.use(express.json());
const micronutrients = require('./micronutrients.js');

/*app.post('/api/micronutrients', (res, req) => {
	if (!req.body.name || req.body.name.length < 3){
		// 400 Bad Request
		res.status(400).send('Name is required and should be minimum 3 characters');
		return;
	}
});*/

app.get('/api/micronutrients', (req, res) => {
	 res.send(micronutrients);
});

// to query a single micronutrients object

/*app.get('/api/micronutrients/:name', (req, res) => {
	 const micronutrient = micronutrients.find(c => c.name === req.params.name);
	 if (!micronutrient) res.status(404).send('The micronutrient with the given name was not found');
	 res.send(micronutrient);
});*/

app.post('/api/micronutrients', (req, res) => {
	// 400 Bad Request 
	res.status(400).send('Name is required and should be minimum 3 characters.');
	return;
})

// we use postman but this appear worked great


app.post('/api/micronutrients', (req, res) => {
	const micronutrient = {
		id: micronutrients.length + 1,
		name: req.body.name
	};
	micronutrients.push(micronutrient);
	res.send(micronutrient);
});

/*app.get('/api/micronutrients/:name/:price', (req, res) => {
	res.send(req.params.name)	;
})*/

/*app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.query)	;
})*/


/*app.get('/api/posts/:name', (req, res) => {
	res.send(req.params.name)	;
})*/

// PORT

const port = process.env.PORT || 8000;

app.listen(8000, () => console.log(`Listening on port ${port}...`));

// https://www.youtube.com/watch?v=pKd0Rpw7O48
// Express.js Tutorial: Build RESTful APIs with Node and Express | Mosh



// A new vitamin

/*{

    "description": "Vitamin B-Complex",
    "price": 22,
    "quantity": 120,
    "servings": 120,
    "monthlyServingsNeed": 30,
    "pricePerServing": null,
    "productLifetime": null,
    "monthlyCost": null,
    "percentage": null,
    "site": "iHerb",
    "photo": "https://s3.images-iherb.com/clf/clf06419/y/15.jpg"

}*/