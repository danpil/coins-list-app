
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

const middlewares = [createLogger(), thunk];
//debugger;
export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);