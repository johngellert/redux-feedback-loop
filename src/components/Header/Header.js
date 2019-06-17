import React, { Component } from 'react';
import '../Header/Header.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feelings from '../Feelings/Feelings';

class Header extends Component {

  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
    );
  }
}

export default Header;
