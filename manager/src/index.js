import React from 'react';
import {render} from 'react-dom';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import reducer from './store/Reducer';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)
render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)