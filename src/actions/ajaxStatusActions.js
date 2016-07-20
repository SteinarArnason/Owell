import * as constants from 'constants';

export function beginAjaxCall() {
  return { type: constants.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: constants.AJAX_CALL_ERROR };
}
