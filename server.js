const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
type Query {
  message: String
}
`);

// Root resolver
const root = {
  message: () => 'Hello World!',
};

// Express server & GraphQL endpoint creation
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Server is running on port 4000'));
