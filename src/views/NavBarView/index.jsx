import React, {Component} from 'react';
import {connect} from 'react-redux';
import './navbar.scss';

export class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <i className="far fa-play-circle logo" />
          <span>Jockeysound</span>
        </div>
        <div className="nav-title"/>
        <div className="nav-auth">
          <div className="login">Login</div>
          <div className="sign-up">Sign up</div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(NavBar);
