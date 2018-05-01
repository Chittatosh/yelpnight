const jwt = require('jsonwebtoken');
const yelpFusion = require('yelp-fusion');

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

const jsUrl = process.env.NODE_ENV
  ? '/main.js' // production
  : 'http://localhost:3001/main.js'; // dev

console.log('\x1b[35m%s\x1b[0m', `${process.env.NODE_ENV} - ${jsUrl}`);

/* ************************* Yelp ************************ */
const yelpClient = yelpFusion.client(process.env.YELP_KEY);

const asyncYelpSearch = async location => {
  const {
    jsonBody: { businesses },
  } = await yelpClient.search({
    categories: 'nightlife',
    location,
  });
  const yelpSearchList = businesses.map(
    /* eslint-disable-next-line camelcase */
    ({ alias, name, image_url, url, location: { display_address } }) => ({
      alias,
      name,
      imageUrl: image_url,
      url,
      address: display_address.join(', '),
    }),
  );
  return yelpSearchList;
};

const asyncYelpReview = async alias => {
  const {
    jsonBody: { reviews },
  } = await yelpClient.reviews(alias);
  return {
    review: (reviews[0] && reviews[0].text) || `${'.'.repeat(100)} ${'.'.repeat(100)}`,
    reviewer: (reviews[0] && reviews[0].user && reviews[0].user.name) || '',
  };
};
/* ************************************************************* */

module.exports = {
  getUserId,
  AuthError,
  jsUrl,
  asyncYelpSearch,
  asyncYelpReview,
};
