import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import '../App/App.css';

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
