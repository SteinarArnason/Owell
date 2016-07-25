import { combineReducers } from 'redux-immutablejs';
import file from './fileImporterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import todo from './todoReducer';

export default combineReducers({
  file,
  ajaxCallsInProgress,
  todo,
});
