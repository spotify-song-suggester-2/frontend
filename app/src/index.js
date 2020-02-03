import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
//import the reducer
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {BrowserRouter as Router} from 'react-router-dom'

//placeholder reducer
const reducer = (state={}, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

