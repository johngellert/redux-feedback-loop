import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

// const feedbackReducer = (state = [], action) => {
//     // switch (action.type) {
//     //     case 'SET_FEELINGS':
//     //         return [...state, action.payload];
//     //     case 'SET_UNDERSTANDING':
//     //         return [...state, action.payload];
//     //     case 'SET_SUPPORT':
//     //         return [...state, action.payload];
//     //     case 'SET_COMMENTS':
//     //         return [...state, action.payload];
//     //     default: return state;
//     // }
// }

const feelingsReducer = (state = "feelings", action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return action.payload;
        default: return state
    }
}



const understandingReducer = (state = "understanding", action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default: return state
    }
}

const supportReducer = (state = "support", action) => {
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

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        supportReducer,
        understandingReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
