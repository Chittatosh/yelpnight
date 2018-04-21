const { getUserId, asyncYelpSearch, asyncYelpReview } = require('../utils');

const Query = {
  me: (parent, args, ctx, info) =>
    ctx.db.query.user({ where: { id: getUserId(ctx) } }, info),

  yelpSearch: (_, { location }) => asyncYelpSearch(location),

  yelpReview: (_, { alias }) => asyncYelpReview(alias),

  userList: (parent, args, ctx, info) => ctx.db.query.users({}, info),

  restaurantList: (parent, args, ctx, info) =>
    ctx.db.query.restaurants({}, info),

  restaurant: (parent, { alias }, ctx, info) =>
    ctx.db.query.restaurant({ where: { alias } }, info),
};

module.exports = { Query };
