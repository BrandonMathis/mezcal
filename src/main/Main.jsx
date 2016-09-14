import React, { Component } from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import Mezcal from '../mezcal/Mezcal';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const newMezcalInitialState = {
  name: {
    value: '',
    valid: true
  },
  region: {
    value: '',
    valid: true
  },
  agave: {
    value: '',
    valid: true
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.newMezcal = this.newMezcal.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      mezcals: [],
      newMezcal: newMezcalInitialState
    };
  }

  clearForm() {
    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.region).value = '';
    ReactDOM.findDOMNode(this.refs.agave).value = '';
    ReactDOM.findDOMNode(this.refs.description).value = '';
  }

  validate(mezcal) {
    let newMezcal = this.state.newMezcal;
    const regionValid = (mezcal.region.length > 1);
    newMezcal = update(newMezcal, {
      region: {$set: { value: mezcal.region, valid: regionValid }}
    });
    const nameValid = (mezcal.name.length > 1);
    newMezcal = update(newMezcal, {
      name: {$set: { value: mezcal.name, valid: nameValid }}
    });
    const agaveValid = (mezcal.agave.length > 1);
    newMezcal = update(newMezcal, {
      agave: {$set: { value: mezcal.agave, valid: agaveValid }}
    });
    this.setState({
      mezcals: this.state.mezcals,
      newMezcal: newMezcal
    });
    return nameValid && regionValid && agaveValid;
  }

  newMezcal(event) {
    event.preventDefault();
    const mezcal = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      region: ReactDOM.findDOMNode(this.refs.region).value,
      agave: ReactDOM.findDOMNode(this.refs.agave).value,
      description: ReactDOM.findDOMNode(this.refs.description).value
    };
    if (!this.validate(mezcal)) {
      return;
    }
    this.clearForm();
    this.setState({
      mezcals: [mezcal].concat(this.state.mezcals),
      newMezcal: newMezcalInitialState
    });
  }

  render() {
    const mezcals = this.state.mezcals;
    return (
      <section className="container">
        <h1>Mezcal</h1>
        <form onSubmit={this.newMezcal}>
          <FormGroup validationState={this.state.newMezcal.name.valid ? null : 'error'}>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              ref="name"
              type="text"
              placeholder="Enter Name"
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup validationState={this.state.newMezcal.region.valid ? null : 'error'}>
            <ControlLabel>Region</ControlLabel>
            <FormControl
              ref="region"
              type="text"
              placeholder="Enter Region"
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup validationState={this.state.newMezcal.agave.valid ? null : 'error'}>
            <ControlLabel>Agave</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="Select Agave"
              ref="agave"
              defaultValue="">
              <option value="" disabled>Select Agave</option>
              <option value="espadin">Espadin</option>
              <option value="arroqueño">Arroqueño</option>
              <option value="cirial">Cirial</option>
              <option value="barril">Barril</option>
              <option value="mexicano">Mexicano</option>
              <option value="cincoañero">Cincoañero</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              ref="description"
              placeholder="Description"/>
          </FormGroup>
          <FormGroup>
            <Button type="submit" bsStyle="default" bsSize="small">
              Submit
            </Button>
          </FormGroup>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Agave</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {mezcals.map((mezcal, i) => {
              return (
                <Mezcal
                  name={mezcal.name}
                  region={mezcal.region}
                  agave={mezcal.agave}
                  description={mezcal.description}
                  key={i}/>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Main;
