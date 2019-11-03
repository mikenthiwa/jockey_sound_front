import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import signUpReducer from './signUpReducer';

export default combineReducers({
  modal: modalReducer,
  signUpState: signUpReducer
});
