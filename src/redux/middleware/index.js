import { all } from 'redux-saga/effects';
import { watchSignUp } from './signUpSaga';
import {watchFetchFeeds} from './feedSaga';

export default function* (){
  yield all([
    watchSignUp(),
    watchFetchFeeds()
  ]);
}
