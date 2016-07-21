import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

import * as constants from 'constants';

const initialState = Immutable.fromJS({
  file: {},
});

export default createReducer(initialState, {

  [constants.PARSE_FILE_SUCCESS]: (state, { file }) => {
    state = state.set('file', file);
    return state;
  }

});
