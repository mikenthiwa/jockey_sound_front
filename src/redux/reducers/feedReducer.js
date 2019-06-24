import {FEED} from '../constants';

const initialState = {
  isLoading: false,
  data: [],
  error: {}
};

export default (state=initialState, action) => {
  switch (action.type) {
  case FEED:
    return {...state, isLoading: true};
  case `${FEED}_SUCCESS`:
    return {...state, data: action.data, isLoading:false, error: {}};
  case `${FEED}_FAILURE`:
    return {...state, error: action.error, isLoading: false, data: []};
  default:
    return state;
  }
};
