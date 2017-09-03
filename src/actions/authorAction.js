import * as types from './actionTypes';
import AuthorAPI from '../api/mockAuthorAPI';
import { beginAjaxCall } from './ajaxStatusAction';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return AuthorAPI.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorSuccess(authors));
            })
            .catch(err => {
                throw (err);
            });
    };
}