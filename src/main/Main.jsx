import React, { PropTypes } from 'react';
import Mezcal from '../mezcal/Mezcal';
import NewMezcal from '../new-mezcal/NewMezcal';
import { connect } from 'react-redux';
import { createMezcal } from '../actions';


const Main = ({ mezcals, onSubmit }) => {
  return (
    <section className="container">
      <h1>Mezcal</h1>
      <NewMezcal onSubmit={onSubmit}/>
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
};

Main.propTypes = {
  mezcals: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    ...state.mezcalApp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (mezcal) => {
      dispatch(createMezcal(mezcal));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
