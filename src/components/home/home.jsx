import React, {Component, Fragment} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../modal/modal';
import NavBar from '../../views/NavBarView';
import SideNav from '../../views/sideNavBarView/sideNavBar';
import Feed from '../../views/feed/feed';
import 'toastr';
import './home.scss';

export class Home extends Component {

  renderIntroBody = () => {
    const tokenData = JSON.parse(localStorage.getItem('jwt-data'));
    return (
      <div className={`intro-body ${!tokenData ? 'active': 'inactive'}`}>
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
    )
  };

  renderAuthHomeBody = () => {
    const tokenData = JSON.parse(localStorage.getItem('jwt-data'));
    const {username = ''} = tokenData;
    return (
      <div className="authenticated-home">
        <SideNav username={username} />
        <Feed />
      </div>
    )
  };

  render() {
    const {history} = this.props;
    const tokenData = JSON.parse(localStorage.getItem('jwt-data'));
    return (
      <div className={`home ${!tokenData ? 'not-authenticated': ''}`}>
        <NavBar isAuthenticated={tokenData}/>
        <Modal history={history}/>
        {!tokenData ?
          <Fragment>{this.renderIntroBody()}</Fragment> :
          <Fragment>{this.renderAuthHomeBody()}</Fragment>
        }
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
