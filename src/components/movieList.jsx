import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

function MovieList(props) {
    const { movies } = props
    return (
        <div>
            {movies.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
    };
}

export default connect(mapStateToProps, {})(MovieList);
