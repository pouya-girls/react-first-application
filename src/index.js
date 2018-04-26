import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootReducer from "./Redux/RootReducer";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        ...RootReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
