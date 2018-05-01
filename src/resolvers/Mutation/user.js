const { getUserId } = require('../../utils');

const user = {
  updateMyLocation: async (parent, { location }, ctx, info) =>
    ctx.db.mutation.updateUser(
      {
        where: { id: getUserId(ctx) },
        data: { location },
      },
      info,
    ),
};

module.exports = { user };
