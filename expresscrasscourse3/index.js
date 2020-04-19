const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const micronutrients = require('./Micronutrients');
const app = express();

// Get single Member
app.get('/api/micronutrients/:description', (req, res) => {
 const found = micronutrients.some(micronutrient => micronutrient.description === req.params.description);
 if (found) {
 res.json(micronutrients.filter(micronutrient => micronutrient.description === req.params.description));
 } else {
     res.status(400).json({ msg:`No Micronutrient with description ${req.params.description} !`});
    }
});



// Init middleware
app.use(logger);

// Get all micronutrients
app.get('/api/micronutrients', (req, res) => res.json(micronutrients));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));