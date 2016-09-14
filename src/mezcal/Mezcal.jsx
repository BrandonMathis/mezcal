import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
_.mixin(require('lodash-inflection'));

const propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  agave: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

class Mezcal extends Component {
  render() {
    return (
      <tr>
        <td> { this.props.name } </td>
        <td> { this.props.region } </td>
        <td> { _.titleize(this.props.agave) } </td>
        <td> { this.props.description } </td>
      </tr>
    );
  }
}

Mezcal.propTypes = propTypes;

export default Mezcal;
