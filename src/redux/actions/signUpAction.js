import {SIGN_UP} from '../constants';

export const signUp = (credentials, callback) => ({
  type: SIGN_UP,
  payload: credentials,
  callback
});

export const signUpSuccess = (data) => ({
  type: `${SIGN_UP}_SUCCESS`,
  payload: data
});

export const signUpFailure = error => ({
  type: `${SIGN_UP}_FAILURE`,
  error
});
