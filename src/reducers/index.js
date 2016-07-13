import { combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import file from './fileImporterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, // sama og að gera courses: courses
  authors, // Kallast short hand property names
  file,
  ajaxCallsInProgress
});

export default rootReducer;
