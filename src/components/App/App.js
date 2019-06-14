import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

import Header from '../Header/Header';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
            </li>
          </ul>

        </div>
      </Router>

    );
  }
}

export default App;
