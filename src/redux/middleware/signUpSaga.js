import {put, takeLatest, call } from 'redux-saga/effects';
import { signUpFailure, signUpSuccess } from '../actions/signUpAction';
import {SIGN_UP} from '../constants';
import {api} from '../../services/auth';
import toastr from 'toastr';

export function* signUpUser(action) {
  try {
    const response = yield call(api.signUp, action.payload);
    const {data: {meta: {token, newUser}}, data} = response;
    yield put(signUpSuccess(data));
    localStorage.setItem('jwt-data', JSON.stringify({...newUser, token}));
    toastr.success('You have successfully created an account!');
    setTimeout(action.callback, 1000);
  }
  catch (error) {
    const { response } = error;
    yield put(signUpFailure(response.data));
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUpUser);
}
