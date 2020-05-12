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
const micronutrients = [
  { id: '1', name: 'Multivitamins', site: 'iHerb', price: 28 },
  { id: '2', name: 'Magnesium', site: 'amazon.co.uk', price: 12 },
  { id: '3', name: 'Potassium', site: 'amazon.co.uk', price: 9 },
];

// Micronutrient Type
const MicronutrientType = new GraphQLObjectType({
  name: 'Micronutrient',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    site: { type: GraphQLString },
    price: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Micronutrients: {
      type: MicronutrientType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < micronutrients.length; i++) {
          if (micronutrients[i].id == args.id) {
            return micronutrients[i];
          }
        }
      },
    },
    micronutrients: {
      type: new GraphQLList(MicronutrientType),
      resolve(parentValue, args) {
        return micronutrients;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
