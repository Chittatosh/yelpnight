import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  amIGoingHere: PropTypes.bool.isRequired,
  mutateFunc: PropTypes.func.isRequired,
  alias: PropTypes.string.isRequired,
};

class RstGoingForm extends Component {
  constructor(props) {
    super(props);
    const { amIGoingHere, mutateFunc } = this.props;
    this.state = { checked: amIGoingHere };
    this.handleCheckboxChange = ({ target: { checked } }) => {
      this.setState({ checked });
      mutateFunc();
    };
  }
  render() {
    const { alias } = this.props;
    const { checked } = this.state;
    return (
      <form>
        <label htmlFor={alias} style={{ cursor: 'pointer' }}>
          <input
            id={alias}
            type="checkbox"
            checked={checked}
            onChange={this.handleCheckboxChange}
          />{' '}
          I&apos;m Going Here
        </label>
      </form>
    );
  }
}

RstGoingForm.propTypes = propTypes;

export default RstGoingForm;
