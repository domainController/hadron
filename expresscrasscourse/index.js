// Express JS Crash Course
// https://www.youtube.com/watch?v=L72fhGm1tfE&t=743s

const express = require('express');
const path = require('path');
const micronutriments = require('./micronutriments.js')
const app = express();


app.get('/api/micronutriments', (req, res) => {
	res.json(micronutriments);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
