export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

import * as BookApi from '../util/books_api_util';

export const addBook = shelved_book => {
    debugger
    return {
        type: ADD_BOOK,
        shelved_book
    };
};

export const removeBook = id => {
    debugger
    return {
        type: REMOVE_BOOK,
        id
    };
};

export const add_to_shelf = shelved_book => {
    return dispatch => {
        return BookApi.add_to_shelf(shelved_book).then(
            shelved_book  => {
                return dispatch(addBook(shelved_book));
            }
        );
    };
};

export const remove_from_shelf = id => {
    return dispatch => {
        return BookApi.remove_from_shelf(id).then(
            id => {
                return dispatch(removeBook(id));
            }
        );
    };
};