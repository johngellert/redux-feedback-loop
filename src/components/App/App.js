import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import '../App/App.css';

import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'
import Comments from '../Comments/Comments';
import Success from '../Success/Success';

import Review from '../Review/Review';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* {this.props.reduxState.submitReducer ?
            <Success /> :
            <FeedbackForm />} */}
        </div>
        <div className="question-container">
          <Route path="/" exact component={Feelings}></Route>
          <Route path="/understanding" exact component={Understanding}></Route>
          <Route path="/support" exact component={Support}></Route>
          <Route path="/comments" exact component={Comments}></Route>
          <Route path="/success" exact component={Success}></Route>
          {this.props.reduxState.submitReducer === false ?
            <Route exact component={Review}></Route> :
            <></ >
          }

        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})
export default connect(mapReduxStateToProps)(App);
