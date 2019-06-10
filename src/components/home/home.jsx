import React, {Component} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../modal/modal';
import NavBar from '../../views/NavBarView';
import 'toastr';

export class Home extends Component {

  render() {
    const {history} = this.props;
    const tokenData = JSON.parse(localStorage.getItem('jwt-data'));
    return (
      <div>
        <NavBar isAuthenticated={tokenData}/>
        <Modal history={history}/>
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
