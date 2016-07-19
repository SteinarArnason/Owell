import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from '../DevTools';

const middleware = [ thunk, reduxImmutableStateInvariant() ];

const enhancer = compose(
  // Middleware for development
  applyMiddleware(...middleware),

  // Required to enable Redux DevTools
  DevTools.instrument(),

  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  // Nota Immutable.fromJS á state hérna? Sjá QU lausnina
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (Webpack HMR has to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) //eslint-disable-line
    );
  }

  return store;
}
