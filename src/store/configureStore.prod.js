import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    Immutable.FromJS(initialState),
    applyMiddleware(thunk)
  );
}
