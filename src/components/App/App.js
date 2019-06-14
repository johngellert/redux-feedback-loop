import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route path="/" exact component={Feelings}></Route>
        </div>
        
      </Router>

    );
  }
}

export default App;
