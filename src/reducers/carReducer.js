import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

// Any imports not from node_modules have to be done relative to current path
// so that unit tests run correctly
import constants from '../constants';

const initialState = Immutable.fromJS({
  information: {},
});

export default createReducer(initialState, {

  [constants.CAR.LOOKUP_SUCCESS]: (state, { result }) => {
    state = state.set('information', result.results[0]);
    return state;
  },

});
