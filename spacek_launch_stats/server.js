const express = require('express');
const grapqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  grapqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
