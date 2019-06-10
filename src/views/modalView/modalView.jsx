import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {closeModal} from "../../redux/actions/modalAction";
import './modalView.scss';

export class ModalView extends Component {



  hideModal = () => {
    const { closeModal } = this.props;
    closeModal();

  };

  stopPropagation = event => {
    event.stopPropagation()
  };

  render() {
    const { modal: {isOpen} } = this.props;
    return (
      <Fragment>
        {
          isOpen ?
            <div className="modal-overlay" onClick={this.hideModal}>
              <div className="modal" onClick={this.stopPropagation}>
                <div className='times' onClick={this.hideModal}>
                  <i className="fas fa-times" />
                </div>
                <div className="modal-content">
                  {this.props.children}
                </div>
              </div>
            </div>: null}
      </Fragment>
    )
  }
}

ModalView.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = () => ({
  closeModal: () => closeModal()
});

export default connect(mapStateToProps, mapDispatchToProps())(ModalView);
