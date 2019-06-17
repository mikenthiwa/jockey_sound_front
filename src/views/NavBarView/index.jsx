import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { SIGN_UP_MODAL } from '../../redux/constants';
import PropType from 'prop-types';
import {openModal} from '../../redux/actions/modalAction';
import './navbar.scss';

export class NavBar extends Component {

  state = {
    isSignUp: true
  };

  render() {
    const { openModal, isAuthenticated } = this.props;
    const { isSignUp } = this.state;
    return (
      <div className={`nav-container ${isAuthenticated? 'active': ''}`}>
        <div className="nav-logo">
          <i className="far fa-play-circle logo" />
          <span>Jockeysound</span>
        </div>
        <div className="nav-title"/>
        <div className="nav-auth">
          {isAuthenticated ?
            <div className="username-cont">
              <i className="far fa-smile-beam" />
              <span className="username">
                {isAuthenticated.username}
                <i className="fas fa-caret-down" />
              </span>
            </div>:
            <Fragment>
              <div className="login">Login</div>
              <div className={`sign-up ${isSignUp ? 'active': ''}`} onClick={openModal}>Sign up</div>
            </Fragment>
          }

        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  openModal: PropType.func,
  isAuthenticated: PropType.string
};

const mapDispatchToProps = () => ({
  openModal: () => openModal(SIGN_UP_MODAL)
});

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapDispatchToProps, mapDispatchToProps())(NavBar);
