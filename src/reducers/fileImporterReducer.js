import * as constants from 'constants';
import initialState from './initialState';

export default function fileImporterReducer(state = initialState.file, action) {
  switch (action.type) {
    case constants.PARSE_FILE_SUCCESS:
      return action.file;
    default:
      return state;
  }
}
