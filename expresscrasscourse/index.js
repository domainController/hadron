// Express JS Crash Course
// https://www.youtube.com/watch?v=L72fhGm1tfE&t=743s

const express = require('express');
const path = require('path');

const micronutrients = require('./micronutrients.js');
const app = express();


const logger = require('./middleware/logger.js');

// Init middle ware
// app.use(logger);


// Members API Routes
app.use('/api/micronutrients', require('./routes/api/micronutrients'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
