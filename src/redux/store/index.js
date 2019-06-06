import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  () => null,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(function* (){ yield null });

export default store;
