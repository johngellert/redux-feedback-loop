import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import '../App/App.css';

import Header from '../Header/Header';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Success from '../Success/Success';


class App extends Component {

  // state = {
  //   isSubmitted: false,
  // }

  componentDidMount(){
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* {this.state.isSubmitted ? <Success /> : <FeedbackForm />} */}
          <FeedbackForm />
        </div>
        <pre>
          {JSON.stringify(this.props.reduxState.feelingsReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.supportReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.understandingReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.commentsReducer, 2, null)}
          {JSON.stringify(this.props.reduxState.clickCountReducer, 2, null)}
        </pre>
        <Route path="/success" exact component={Success}></Route>
      </Router>

    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})
export default connect(mapReduxStateToProps)(App);
