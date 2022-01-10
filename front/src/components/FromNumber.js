import { number } from 'prop-types';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';

const NumbersForm = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };

  return <div className="container">
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className='col'>
          <label htmlFor="number1"></label>
          <input id="number1" className="form-control form-control-lg" placeholder="Ingrese el número mínimo"
            type="number" min="0" max="100"
            onChange={(e) => setState({ ...state, number1: e.target.value })}>
          </input>
        </div>
        <div className='col'>
          <label htmlFor="number2"></label>
          <br />
          <input id="number2" className="form-control form-control-lg" placeholder="Ingrese el número máximo"
            type="number" min="0" max="100"
            onChange={(e) => setState({ ...state, number2: e.target.value })}>
          </input>
        </div>
        <div className='input-group mb-3'>
            <button type="submit" className='btn btn-dark btn-sm' disabled={props.loading}>
              Enviar
            </button>
        </div>
      </div>
    </form >
  </div >
}

const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}

export default connect(stateMapToPros)(NumbersForm)


