import React, { PropTypes, Component } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

class Mezcal extends Component {
  render() {
    return (
      <tr>
        <td> { this.props.name } </td>
        <td> { this.props.region } </td>
      </tr>
    );
  }
}

Mezcal.propTypes = propTypes;

export default Mezcal;
