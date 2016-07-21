import { combineReducers } from 'redux-immutablejs';
import file from './fileImporterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

export default combineReducers({
  file,
  ajaxCallsInProgress
});
