import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from '../DevTools';

const middleware = [thunk, reduxImmutableStateInvariant()];

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
)

export default function configureStore(initialState) {
    // Nota Immutable.fromJS á state hérna? Sjá QU lausnina
    const store = createStore(rootReducer, initialState, enhancer);

    // Hot reload reducers (Webpack HMR has to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

    return store;
}

/*export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}*/

// initialState hér er ekki það sama og notað er í reducer möppunni
// sjá: https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m8&clip=7&mode=live
