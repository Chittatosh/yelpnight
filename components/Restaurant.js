import React from 'react';
import PropTypes from 'prop-types';

import ReviewQuery from './ReviewQuery';
import RstGstCountQry from './RstGstCountQry';
import RstAmIGoingQry from './RstAmIGoingQry';
import { AUTH_TOKEN } from '../client/constants';

const propTypes = {
  alias: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const Restaurant = ({ alias, name, imageUrl, url, address }) => (
  <li className="d-flex list-group-item" style={{ maxHeight: '200px' }}>
    <img src={imageUrl} className="w-25 rounded mr-3" alt={alias} />
    <div className="flex-column">
      <div className="d-flex justify-content-between">
        <h3 className="mb-1">{name}</h3>
        <RstGstCountQry {...{ alias }} />
        {localStorage.getItem(AUTH_TOKEN) && <RstAmIGoingQry {...{ alias }} />}
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="mb-1">{address}</h5>
        <a href={url} className="ml-5 text-dark">
          <u>More info</u> <i className="fas fa-external-link-alt" />
        </a>
      </div>
      <ReviewQuery {...{ alias }} />
    </div>
  </li>
);

Restaurant.propTypes = propTypes;

export default Restaurant;
