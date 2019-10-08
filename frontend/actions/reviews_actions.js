export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

import * as ReviewApi from '../util/reviews_api_util';

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};

export const removeReview = id => {
    return {
        type: REMOVE_REVIEW,
        id
    };
};

export const createReview = review => {
    return dispatch => {
        return ReviewApi.createReview(review).then(
            review => {
                return dispatch(receiveReview(review));
            }
        );
    };
};

export const updateReview = review => {
    return dispatch => {
        return ReviewApi.updateReview(review).then(
            review => {
                return dispatch(receiveReview(review));
            }
        );
    };
};

export const deleteReview = id => {
    return dispatch => {
        return ReviewApi.deleteReview(id).then(
            review => {
                return dispatch(removeReview(review));
            }
        );
    };
};