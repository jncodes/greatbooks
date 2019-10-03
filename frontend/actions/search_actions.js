export const GENERAL_SEARCH = "GENERAL_SEARCH";
export const TITLE_SEARCH = "TITLE_SEARCH";
export const AUTHOR_SEARCH = "AUTHOR_SEARCH";
export const SUBJECT_SEARCH = "SUBJECT_SEARCH";

import * as SearchApi from '../util/search_util';

export const generalSearch = query => {
    return {
        type: GENERAL_SEARCH,
        query
    };
};

export const titleSearch = query => {
    return {
        type: TITLE_SEARCH,
        query
    };
};

export const authorSearch = query => {
    return {
        type: AUTHOR_SEARCH,
        query
    };
};

export const subjectSearch = query => {
    return {
        type: SUBJECT_SEARCH,
        query
    };
};

export const search = query => {
    return dispatch => {
        return SearchApi.search(query).then(
            query => {
                return dispatch(generalSearch(query));
            }
        );
    };
};

export const title = query => {
    return dispatch => {
        return SearchApi.title(query).then(
            query => {
                return dispatch(titleSearch(query));
            }
        );
    };
};

export const author = query => {
    return dispatch => {
        return SearchApi.author(query).then(
            query => {
                return dispatch(authorSearch(query));
            }
        );
    };
};

export const genre = query => {
    return dispatch => {
        return SearchApi.genre(query).then(
            query => {
                return dispatch(subjectSearch(query));
            }
        );
    };
};

