import React from 'react';
import { useReducer, useState } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';

import { addOne, applyNumber, APPLY_NUMBER, CHANGE_OPERATION, changeOperation, clearDisplay, CLEAR_DISPLAY, memoryToTotal, memoryToZero } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const numberHandler = (number) => {
    dispatch(applyNumber(number));
    return { type: APPLY_NUMBER, payload: number }
  }

  const operatationHandler = (operator) => {
    dispatch(changeOperation(operator));
    // return { type: CHANGE_OPERATION, payload: operator }
  }

  const clearState = () => {
    dispatch(clearDisplay())
    return clearState
  }

  const mPlus = () => {
    dispatch(memoryToTotal())
    return mPlus
  }

  const MC = () => {
    dispatch(memoryToZero())
    return MC
  }

  const MR = () => {
    dispatch()
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => (mPlus())} />
              <CalcButton value={"MR"} onClick={() => (MR())} />
              <CalcButton value={"MC"} onClick={() => (MC())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => (numberHandler(1))} />
              <CalcButton value={2} onClick={() => (numberHandler(2))} />
              <CalcButton value={3} onClick={() => (numberHandler(3))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => (numberHandler(4))} />
              <CalcButton value={5} onClick={() => (numberHandler(5))} />
              <CalcButton value={6} onClick={() => (numberHandler(6))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => (numberHandler(7))} />
              <CalcButton value={8} onClick={() => (numberHandler(8))} />
              <CalcButton value={9} onClick={() => (numberHandler(9))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => (operatationHandler("+"))} />
              <CalcButton value={"*"} onClick={() => (operatationHandler("*"))} />
              <CalcButton value={"-"} onClick={() => (operatationHandler("-"))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearState} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


export default App;
