import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

const clickCountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return state + 1;
        case 'SET_UNDERSTANDING':
            return state + 1;
        case 'SET_SUPPORT':
            return state + 1;
        case 'SET_COMMENTS':
            return state + 1;
        case 'RESET_COUNT':
            return action.payload;
        default: return state;
    }
}

const feelingsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return action.payload;
        default: return state
    }
}

const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default: return state
    }
}

const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default: return state
    }
}

const commentsReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default: return state
    }
}

const submitReducer = (state = false, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return action.payload;
        default: return state
    }
}

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        supportReducer,
        understandingReducer,
        commentsReducer,
        clickCountReducer,
        submitReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
