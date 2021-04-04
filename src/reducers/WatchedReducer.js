export const WatchedReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...state, {
                title: action.movie.title
            }];
        case 'REMOVE_BOOK':
            return state.filter((movie, idx) => idx !== action.idx);
        default:
            return state;
    }
};