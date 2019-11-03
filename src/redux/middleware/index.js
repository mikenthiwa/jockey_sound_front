import { all } from 'redux-saga/effects';
import { watchSignUp } from './signUpSaga';

export default function* (){
  yield all([
    watchSignUp()
  ]);
}
