import constants from 'constants';

export function ajaxCallStart() {
  return { type: constants.AJAX.CALL_START };
}

export function ajaxCallError() {
  return { type: constants.AJAX.CALL_ERROR };
}

export function ajaxCallSuccess() {
  return { type: constants.AJAX.CALL_SUCCESS };
}
