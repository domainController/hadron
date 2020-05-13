const axios = require('axios');

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
// const users = [
//   {
//     userid: '16235101125700887715',
//     realname: 'Stefanie',
//     location: 'Munich, Germany',
//     age: 41,
//   },
//   {
//     userid: '4621266595948139765',
//     realname: 'Rosa',
//     location: 'Santiago, Chile',
//     age: 46,
//   },
//   {
//     userid: '7337320773995286956',
//     realname: 'pond',
//     location: 'Ban Mae Nam, Thailand',
//     age: 41,
//   },
// ];

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    userid: { type: GraphQLString },
    realname: { type: GraphQLString },
    location: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        userid: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        /* for (let i = 0; i < users.length; i++) {
          if (users[i].userid == args.userid) {
            return users[i];
          }
        } */
        let config = {
          params: {
            userid: args.userid,
          },
        };
        return axios
          .get('http://localhost:3000/users', config)
          .then((res) => res.data);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/users').then((res) => res.data);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        realname: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/users', {
            realname: args.realname,
            location: args.location,
            age: args.age,
          })
          .then((res) => res.data);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
