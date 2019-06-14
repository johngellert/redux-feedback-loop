import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Route path="/" exact component={Feelings}></Route>
          <Route path="/understanding" exact component={Understanding}></Route>
          <Route path="/support" exact component={Support}></Route>
        </div>
        
      </Router>

    );
  }
}

export default App;
