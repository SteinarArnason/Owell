// Due to reasons beyond my control this file cannot be called 'constants.js'
// using the import style as seen in the project (omitting the '.js').
// See: https://github.com/facebook/jest/issues/1641
import keyMirror from 'keymirror';
import _ from 'lodash';

const createConstants = (constants) => {
  return _.each(constants, (v, k) => {
    _.each(v, (vv, kk) => {
      vv = `${ k }__${ vv }`;
      v[kk] = vv;
    });
  });
};

export default createConstants({
  AJAX: keyMirror({
    CALL_START: null,
    CALL_ERROR: null,
    CALL_SUCCESS: null,
  }),
  TODO: keyMirror({
    ADD: null,
    TOGGLE: null,
  }),
  CAR: keyMirror({
    LOOKUP_SUCCESS: null,
  }),
});
