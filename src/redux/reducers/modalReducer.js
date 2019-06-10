import {CLOSE_MODAL, OPEN_MODAL} from '../constants';

const initialState = {
  isOpen: false,
  modalType: ''
};

export default (state=initialState, action) => {
  switch (action.type) {
  case OPEN_MODAL:
    return {...state, isOpen: true, modalType: action.payload};
  case CLOSE_MODAL:
    return {...state, isOpen: false, modalType: null};
  default:
    return {...state};
  }
};
