import { SIGN_UP } from '../constants';

const initialState = {
  isLoading: false,
  data: {},
  error: {},
  isAuthenticated: false
};

export default (state=initialState, action) => {
  switch (action.type) {
  case SIGN_UP:
    return {...state, isLoading: true};
  case `${SIGN_UP}_SUCCESS`:
    return {...state,
      isLoading: false,
      data: action.payload,
      error: {},
      isAuthenticated: true
    };
  case `${SIGN_UP}_FAILURE`:
    return {...state, isLoading: false, error: action.error, data: {}, isAuthenticated: false};
  default:
    return {...state};
  }
};
