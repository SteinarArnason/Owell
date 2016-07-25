import { combineReducers } from 'redux-immutablejs';
import file from './fileImporterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import todo from './todoReducer';
import car from './carReducer';

export default combineReducers({
  file,
  ajaxCallsInProgress,
  todo,
  car,
});
