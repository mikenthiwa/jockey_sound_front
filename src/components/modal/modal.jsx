import React, {Fragment} from 'react';
import PropType from 'prop-types';
import SignUp from '../auth/signup';
import {connect} from 'react-redux';

const modalTypes = {
  SIGN_UP_MODAL: SignUp
};

const modal = (props) => {
  const {modal: {modalType}, history} = props;
  const Modal = modalTypes[modalType];
  return (
    <Fragment>
      {modalType ? <Modal history={history}/>: null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

modal.propTypes = {
  modal: PropType.object,
  history:PropType.object
};

export default connect(mapStateToProps, null)(modal);
