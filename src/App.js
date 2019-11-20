import React from 'react';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Display from './components/Dispaly'
import Content from './components/Content'
import AnotherComponent from './components/AnotherComponent'
import ClassCompoent from './components/ClassComponentDemo'
import CarsList from './components/CarsList'
import ReactChildrenDemo from './components/ReactChildrenDemo'

const initialState = {
  count: 0,
  anotherCount: 55,
  anotherfieldForDiffComponent:"223344",
  cars: [{id:1, name:'skoda'}, {id:2, name:'audi'}, {id:3, name:'mgh'}, {id:4, name:'bmw'}]
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
          i am the app
          </p>
          {/* <Counter />
          <Display/>
          <Content/>
          <AnotherComponent/>
          <ClassCompoent/>
          <CarsList/>
          <ReactChildrenDemo subComponent={<div className='sub'><h5>h5</h5><h6>h6</h6></div>}>
            <h1>i am h1</h1>
            <h2>i am h2</h2>
          </ReactChildrenDemo> */}
      </div>
    </Provider>
  );
}

export default App;
