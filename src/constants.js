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
  FILE: keyMirror({
    PARSE_SUCCESS: null,
  }),
  TODO: keyMirror({
    ADD: null,
    TOGGLE: null,
  }),
});
