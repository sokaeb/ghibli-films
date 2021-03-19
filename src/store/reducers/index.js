

const initialState = {
    movies: [],
    loadingMovies: false,
    errorMessage: "",
};

export default (state = initialState, action ) => {
    switch(action.type){
        case FETCH_MOVIES:
            return {
                ...state,
                loadingCharacters: true
            };
        default: return state;
    };
};