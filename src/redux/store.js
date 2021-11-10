import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { pelisReducer } from './pelis/pelis-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    pelisStore: pelisReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
