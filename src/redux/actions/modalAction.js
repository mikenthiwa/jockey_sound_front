import {OPEN_MODAL, CLOSE_MODAL} from '../constants';


export const openModal = modalType => ({
  type: OPEN_MODAL,
  payload: modalType
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});


