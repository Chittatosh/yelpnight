import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { AUTH_TOKEN } from '../client/constants';

class YelpSearchQuery extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'sf', submitTerm: 'sf' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }
  handleSubmit(event) {
    this.setState({ submitTerm: this.state.value || 'sf' });
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchbox">
            Name:
            <input
              id="searchbox"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" disabled={!this.state.value} />
        </form>
        <Query
          query={gql`
            {
              yelpSearch(location:"${this.state.submitTerm}"){
                alias
                name
                address
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              return (
                <div>
                  <h3>{error.message}</h3>
                </div>
              );
            }
            // const { hello, yelp } = data;
            return (
              <div>
                {data.yelpSearch.map(place => (
                  <div key={place.alias}>
                    <h3>{place.name}</h3>
                    <code>{authToken && place.alias}</code>
                    <p>{place.address}</p>
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default YelpSearchQuery;
