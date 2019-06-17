import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import '../App/App.css';

import Header from '../Header/Header';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { jsxOpeningFragment } from '@babel/types';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <FeedbackForm />
          
        </div>
        <pre>
          {JSON.stringify(this.props.reduxState.feelingsReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.supportReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.understandingReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.commentsReducer, 2, null)}
        </pre>
      </Router>

    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})
export default connect(mapReduxStateToProps)(App);
