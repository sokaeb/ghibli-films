/* eslint-disable import/no-anonymous-default-export */
import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../actions/index';

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
        case FETCH_MOVIES_SUCCESS: 
            return {
                ...state,
                movies: action.payload,
                loadingCharacters: false
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                loadingCharacters: false,
                errorMessage: action.payload
            };
        default: 
        return state;
    };
};