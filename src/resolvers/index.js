const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { restaurant } = require('./Mutation/restaurant');
const { user } = require('./Mutation/user');
const { AuthPayload } = require('./AuthPayload');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...restaurant,
    ...user,
  },
  AuthPayload,
};
