import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, SAVE_WISH_LIST } from './actionTypes';

const initialState = {
    wishList: [],
    savedWishLists: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            if (state.wishList.some(movie => movie.imdbID === action.payload.imdbID)) {
                alert('Film artıq əlavə edilib');
                return state;
            } else {
                return {
                    ...state,
                    wishList: [...state.wishList, action.payload]
                };
            }
        case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                wishList: state.wishList.filter(movie => movie.imdbID !== action.payload.imdbID)
            };
        case SAVE_WISH_LIST:
            return {
                ...state,
                savedWishLists: {
                    ...state.savedWishLists,
                    [action.payload]: state.wishList
                },
                wishList: [] // Clear the current wish list after saving
            };
        default:
            return state;
    }
};

export default reducer;
