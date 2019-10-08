export const RECEIVE_SHELF = "RECEIVE_SHELF";
export const REMOVE_SHELF = "REMOVE_SHELF";
export const RECEIVE_ALL_SHELVES = "RECEIVE_ALL_SHELVES";

import * as ShelfApi from '../util/shelves_api_util';

export const receiveShelf = shelf => {
    return {
        type: RECEIVE_SHELF,
        shelf
    };
};

export const removeShelf = id => {
    return {
        type: REMOVE_SHELF,
        id
    };
};

export const receiveAllShelves = shelves => {
    return {
        type: RECEIVE_ALL_SHELVES,
        shelves
    };
};

export const createShelf = shelf => {
    return dispatch => {
        return ShelfApi.createShelf(shelf).then(
            shelf => {
                return dispatch(receiveShelf(shelf));
            }
        );
    };
};

export const fetchShelves = () => {
    debugger
    return dispatch => {
        debugger
        return ShelfApi.fetchShelves().then(
            shelves => {
                debugger
                return dispatch(receiveAllShelves(shelves));
            }
        );
    };
};

export const fetchShelf = id => {
    return dispatch => {
        return ShelfApi.fetchShelf(id).then(
            shelf => {
                return dispatch(receiveShelf(shelf));
            }
        );
    };
};

export const updateShelf = shelf => {
    return dispatch => {
        return ShelfApi.updateShelf(shelf).then(
            shelf => {
                return dispatch(receiveShelf(shelf));
            }
        );
    };
};

export const deleteShelf = id => {
    return dispatch => {
        return ShelfApi.deleteShelf(id).then(
            shelf => {
                return dispatch(removeShelf(shelf));
            }
        );
    };
};

