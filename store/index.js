import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
  reducers,//default reducers
  {},//default state of our applyMiddleware
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
