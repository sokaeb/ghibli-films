import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import styled from 'styled-components';

const StyledDiv = styled.div`
/* border: 1px solid green; */
margin-top: 3%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`


function MovieList(props) {
    const { movies } = props
    return (
        <StyledDiv>
            {movies.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
            })}
        </StyledDiv>
    )
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
    };
}

export default connect(mapStateToProps, {})(MovieList);
