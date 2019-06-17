import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

// The clickCountReducer keeps track of the next button clicks.
// Count is used to disable next button on Comments component.
// Also used in Review component to enable the submit button at the last next click
// in Comments component
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

// stores the value of feeling
const feelingsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return action.payload;
        default: return state
    }
}

// stores the value of understanding
const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default: return state
    }
}

// stores the value of support
const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default: return state
    }
}

// stores the comments
const commentsReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default: return state
    }
}

// the submit reducer holds a boolean
// used in feedbackForm component in a ternary to display the the Success component
const submitReducer = (state = false, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return action.payload;
        case 'SUBMIT_FALSE':
            return action.payload;
        default: return state
    }
}

// store instance holds all the reducer states
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

// Provider wraps the App so that the components can access the store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
