import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

import constants from 'reduxConstants';

const initialState = Immutable.fromJS({
  information: {},
});

export default createReducer(initialState, {

  [constants.CAR.LOOKUP_SUCCESS]: (state, { information }) => {
    state = state.set('information', information);
    return state;
  },

});
