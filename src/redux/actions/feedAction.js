import {FEED} from '../constants';

export const feed = () => ({
  type: FEED
});

export const feedSuccess = (data) => ({
  type: `${FEED}_SUCCESS`,
  data
});

export const feedFailure = (error) => ({
  type: `${FEED}_FAILURE`,
  error
});
