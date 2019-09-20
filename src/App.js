import React from 'react';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Display from './components/Dispaly'
import AnotherComponent from './components/AnotherComponent'
const initialState = {
  count: 0,
  anotherCount: 55,
  anotherfieldForDiffComponent:"223344"
}
function reducer(state=initialState, action) {
  switch(action.type){
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      }
    case "ANOTHER":
      return {
        ...state,
        anotherfieldForDiffComponent: action.value
      }
    default:
        return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <p>
          i am here
          </p>
          <Counter />
          <Display/>
          {/* <AnotherComponent/> */}
      </div>
    </Provider>
  );
}

export default App;
