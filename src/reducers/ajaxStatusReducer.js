import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

import constants from 'constants';

const initialState = Immutable.fromJS({
  ajaxCallsInProgress: 0,
});

export default createReducer(initialState, {

  [constants.AJAX.CALL_START]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') + 1);
    return state;
  },

  [constants.AJAX.CALL_ERROR]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') - 1);
    return state;
  },

  [constants.AJAX.CALL_SUCCESS]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') - 1);
    return state;
  },

});
