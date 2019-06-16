import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return [...state, action.payload];
        case 'SET_UNDERSTANDING':
            return [...state, action.payload];
        case 'SET_SUPPORT':
            return [...state, action.payload];
        case 'SET_COMMENTS':
            return [...state, action.payload];
        default: return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
