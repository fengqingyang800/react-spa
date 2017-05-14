/**
 * @file index.jsx
 * @author deo
 *
 */
import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
