import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import signUpReducer from './signUpReducer';
import feedReducer from './feedReducer';

export default combineReducers({
  modal: modalReducer,
  signUpState: signUpReducer,
  feed: feedReducer
});
