import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the store from redux so we can use it.
// The store, IS redux. 
import { createStore } from 'redux';

// Import the provider component from react-redux so that react
// and redux can talk to each other through 'connect', but the
// Provider component makes that happen 
import { Provider } from 'react-redux';

// We need a master/root reduver to give to the store
import reducers from './Reducers/index';
import rootReducer from './Reducers/index';

// Make a store for redux to use. Pass it reducers, whish is the 
// export of the rootreducer file. The rootreducer is just all the 
// little reducers returns. 
const theStore = createStore(reducers);

// Procider is the compnent that makes connect work (connect is inside 
// the containers). It takes a prop of store, which is the reduxStore. 
// The redux store was made by createStore and giving it the rootReducer.


ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
