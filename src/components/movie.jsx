import React from 'react';

function Movie(props) {
    const { movie } = props;

    return (
        <div>
            <p>{movie.title}</p>
            <p>{movie.original_title}</p>
            <p>{movie.description}</p>
        </div>
    )
}

export default Movie;
