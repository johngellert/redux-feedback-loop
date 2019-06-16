import React, { Component } from 'react';
import '../Header/Header.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feelings from '../Feelings/Feelings';

class Header extends Component {

handleClickHome = () => {
  this.props.history.push('/');
}

  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <button className="home-button"onClick={this.handleClickHome}>Home</button>
        </header>
    );
  }
}

export default Header;
