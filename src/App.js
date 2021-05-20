import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import { addOne, applyNumber, changeOperation, clearDisplay, memoryClear, memoryPlus, memoryRecall } from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const mathHandler = (number) => {
    dispatch(applyNumber(number))
  }

  const operatorHandler = (operator) => {
    dispatch(changeOperation(operator))
  }

  const clearHandler = () => {
    dispatch(clearDisplay())
  }

  const addMemoryHandler = () => {
    dispatch(memoryPlus())
  }
  const recallMemoryHandler = () => {
    dispatch(memoryRecall())
  }
  const clearMemoryHandler = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={addMemoryHandler}/>
              <CalcButton value={"MR"} onClick={recallMemoryHandler}/>
              <CalcButton value={"MC"} onClick={clearMemoryHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => mathHandler(1)}/>
              <CalcButton value={2} onClick={() => mathHandler(2)}/>
              <CalcButton value={3} onClick={() => mathHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => mathHandler(4)}/>
              <CalcButton value={5} onClick={() => mathHandler(5)}/>
              <CalcButton value={6} onClick={() => mathHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => mathHandler(7)}/>
              <CalcButton value={8} onClick={() => mathHandler(8)}/>
              <CalcButton value={9} onClick={() => mathHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operatorHandler('+')}/>
              <CalcButton value={"*"} onClick={() => operatorHandler('*')}/>
              <CalcButton value={"-"} onClick={() => operatorHandler('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
