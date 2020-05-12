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
const users = [
  {
    userid: '16235101125700887715',
    realname: 'Stefanie',
    location: 'Munich, Germany',
    age: 41,
  },
  {
    userid: '4621266595948139765',
    realname: 'Rosa',
    location: 'Santiago, Chile',
    age: 46,
  },
  {
    userid: '7337320773995286956',
    realname: 'pond',
    location: 'Ban Mae Nam, Thailand',
    age: 41,
  },
];

// User Type
const UserType = new GraphQLObjectType({
  realname: 'User',
  fields: () => ({
    userid: { type: GraphQLString },
    realname: { type: GraphQLString },
    location: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  realname: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        userid: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].userid == args.userid) {
            return users[i];
          }
        }
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return users;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
