import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

import Header from '../Header/Header';

import FeedbackForm from '../FeedbackForm/FeedbackForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <FeedbackForm />
          
        </div>
        
      </Router>

    );
  }
}

export default App;
