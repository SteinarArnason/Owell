import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

import * as constants from 'constants';

const initialState = Immutable.fromJS({
  ajaxCallsInProgress: 0,
});

export default createReducer(initialState, {

  [constants.AJAX_CALL_START]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') + 1);
    return state;
  },

  [constants.AJAX_CALL_ERROR]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') - 1);
    return state;
  },

  [constants.AJAX_CALL_SUCCESS]: (state) => {
    state = state.set('ajaxCallsInProgress', state.get('ajaxCallsInProgress') - 1);
    return state;
  },

});
