// Express JS Crash Course
// https://www.youtube.com/watch?v=L72fhGm1tfE&t=743s

const express = require('express');
const app = express();
app.listen();
const PORT = process.env.PORT || 5000;
app.listen(PORT), () => console.log(`Server started on port ${PORT}`));
