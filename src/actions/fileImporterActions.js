import * as types from './actionTypes';
import fileImporterApi from '../api/mockFileImporterApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function parseFileSuccess(file) {
    return { type: types.PARSE_FILE_SUCCESS, file: file };
    // return { type: types.PARSE_FILE_SUCCESS, file};
}

export function parseFile(file) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return fileImporterApi.parseRbFile(file)
            .then((parsedFile) => {
                dispatch(parseFileSuccess(parsedFile));
            }).catch((error) => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}