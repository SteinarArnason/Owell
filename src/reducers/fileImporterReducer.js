import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fileImporterReducer(state = initialState.parsedFile, action) {
    switch(action.type) {
        case types.PARSE_FILE_SUCCESS:
            return action.file;
        default:
            return state;
    }
}
