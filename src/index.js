
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ProductsReducer } from './reducers';
import App from './App';


const store = createStore(ProductsReducer);
render(
  <Provider store={store}>
    <App />
  </Provider>
);
*/
