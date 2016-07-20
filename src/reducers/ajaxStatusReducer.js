import * as constants from 'constants';
import initialState from './initialState';

function actionTypeEndsInSuccess(constant) {
  return constant.substring(constant.length - 8) == '_SUCCESS';
}

export default function(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == constants.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == constants.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
