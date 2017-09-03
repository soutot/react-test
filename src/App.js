import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
