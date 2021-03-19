import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_MOVIES });
        axios.get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            dispatch({
                type: FETCH_MOVIES_SUCCESS,
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_MOVIES_ERROR,
                payload: { message: "No movies found"}
            });
        });
    }
}