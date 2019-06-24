import {takeLatest, put, call} from 'redux-saga/effects';
import {FEED} from '../constants';
import {feedSuccess, feedFailure} from '../actions/feedAction';
import {api } from '../../services/feed';

export function* fetchFeeds (){
  try{
    const response = yield call(api.feed);
    yield put(feedSuccess(response.data));
  }
  catch (e) {
    const error = e.response;
    yield put(feedFailure(error));
  }

}

export function* watchFetchFeeds (){
  yield takeLatest(FEED, fetchFeeds);
}
