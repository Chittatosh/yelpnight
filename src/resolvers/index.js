const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { restaurant } = require('./Mutation/restaurant');
const { AuthPayload } = require('./AuthPayload');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...restaurant,
  },
  AuthPayload,
};
