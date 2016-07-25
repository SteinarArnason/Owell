import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    fromJS(initialState),
    applyMiddleware(thunk)
  );
}
