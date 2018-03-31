import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import App from './components/App';  // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';  // eslint-disable-line no-unused-vars
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/js/materialize';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root')
);
