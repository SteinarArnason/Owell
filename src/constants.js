/* export const AJAX_CALL_START = 'AJAX_CALL_START';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const AJAX_CALL_SUCCESS = 'AJAX_CALL_SUCCESS';

export const PARSE_FILE_SUCCESS = 'PARSE_FILE_SUCCESS';
*/

import keyMirror from 'keymirror';

export default {
  AJAX: keyMirror({
    CALL_START: null,
    CALL_ERROR: null,
    CALL_SUCCESS: null,
  }),
  FILE: keyMirror({
    PARSE_SUCCESS: null,
  }),
};
