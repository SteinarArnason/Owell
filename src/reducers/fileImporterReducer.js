import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

import constants from 'constants';

const initialState = Immutable.fromJS({
  file: {},
});

export default createReducer(initialState, {

  [constants.FILE.PARSE_SUCCESS]: (state, { file }) => {
    state = state.set('file', file);
    return state;
  }

});
