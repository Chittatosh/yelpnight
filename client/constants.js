import { gql } from 'apollo-boost';

export const AUTH_TOKEN = 'yelp-token';

export const USER_FIELDS = `
  {
    id
    name
    location
    restaurantList {
      alias
    }
  }
`;

export const RESTAURANT_FIELDS = `
  {
    id
    alias
    guestList{
      name
    }
  }
`;

export const ME_QUERY = gql`
  {
    me ${USER_FIELDS}
  }
`;
