import * as constants from 'constants';

export function ajaxCallStart() {
  return { type: constants.AJAX_CALL_START };
}

export function ajaxCallError() {
  return { type: constants.AJAX_CALL_ERROR };
}

export function ajaxCallSuccess() {
  return { type: constants.AJAX_CALL_SUCCESS };
}
