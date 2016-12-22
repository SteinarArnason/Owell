import constants from 'reduxConstants';

export function ajaxCallStart() {
  return { type: constants.AJAX.CALL_START };
}

export function ajaxCallError() {
  return { type: constants.AJAX.CALL_ERROR };
}

export function ajaxCallSuccess() {
  return { type: constants.AJAX.CALL_SUCCESS };
}
