const { getUserId } = require('../../utils');

const restaurant = {
  addRestaurant: async (parent, { alias }, ctx, info) =>
    ctx.db.mutation.createRestaurant(
      {
        data: {
          alias,
          guestList: {
            connect: { id: getUserId(ctx) },
          },
        },
      },
      info,
    ),

  addMeToRestaurant: async (parent, { alias }, ctx, info) =>
    ctx.db.mutation.updateRestaurant(
      {
        where: { alias },
        data: {
          guestList: {
            connect: { id: getUserId(ctx) },
          },
        },
      },
      info,
    ),

  removeMeFromRestaurant: async (parent, { alias }, ctx, info) =>
    ctx.db.mutation.updateRestaurant(
      {
        where: { alias },
        data: {
          guestList: {
            disconnect: { id: getUserId(ctx) },
          },
        },
      },
      info,
    ),
};

module.exports = { restaurant };
