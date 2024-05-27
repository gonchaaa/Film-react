import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, SAVE_WISH_LIST } from './actionTypes';

export const addToWishList = (movie) => ({
    type: ADD_TO_WISH_LIST,
    payload: movie
});

export const removeFromWishList = (movie) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: movie
});

export const saveWishList = (listName) => ({
    type: SAVE_WISH_LIST,
    payload: listName
});
