import { combineReducers } from 'redux';
import file from './fileImporterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  file,
  ajaxCallsInProgress
});

export default rootReducer;
