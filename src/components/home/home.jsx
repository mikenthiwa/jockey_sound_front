import React, {Component} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../modal/modal';
import NavBar from '../../views/NavBarView';
import 'toastr';
import './home.scss';

export class Home extends Component {

  render() {
    const {history} = this.props;
    const tokenData = JSON.parse(localStorage.getItem('jwt-data'));
    console.log(tokenData);
    return (
      <div className={`home ${!tokenData ? 'not-authenticated': ''}`}>
        <NavBar isAuthenticated={tokenData}/>
        <Modal history={history}/>
        <div className="intro-body">
          <div className="intro">
            <span>The global community for audio culture</span>
            <small>Explore 15+ million radio shows, DJ mixes and podcasts made by passionate creators.</small>
          </div>

          <div className="facebook-auth">
            <button className="auth-button facebook-button">
              <i className="fab fa-facebook-f btn-facebook" />
              <span>Sign in</span>
            </button>

            <button className="auth-button listening-button">
              Start Listening
            </button>
          </div>
          <div className="email-auth">Sign up with email</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropType.object
};

const mapStateToProps = ({signUpState}) => ({
  signUpState
});

export default connect(mapStateToProps, null)(Home);
