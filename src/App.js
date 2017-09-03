import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './App.css';
import reducers from './reducers';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <div>
          <div
            style={{
              backgroundColor: 'yellow',
            }}
          >
            <Search />
          </div>
          <div
            style={{
              backgroundColor: '#F1F1F1',
            }}
          >
            <Results />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
