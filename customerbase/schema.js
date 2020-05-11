const {
  GraphQLObjectType,
  GraphQLObject,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = require('graphql');

// Hardcoded data
const customers = [
  { id: '1', name: 'Penny Hardaway', email: 'hundred.ml@gmail.com', age: 47 },
  { id: '2', name: 'Nick Van Excel', email: 'thousand.ml@gmail.com', age: 44 },
  { id: '3', name: 'Harold Miner', email: 'millions.ml@gmail.com', age: 45 },
];

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i];
          }
        }
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return customers;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
