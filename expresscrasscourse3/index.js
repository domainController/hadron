const express = require('express');
const exphbs = require('express-handlebars');
const micronutrients = require('./Micronutrients');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();

// Init middleware
app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Micronutrient App',
    micronutrients
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')))

// Micronutrients API Routes
app.use('/api/micronutrients', require('./routes/api/micronutrients'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));



