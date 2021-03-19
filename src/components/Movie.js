import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
/* border: 1px solid red; */
box-sizing: border-box;
width: 30%;
margin: 2% 0;
padding: 1% 3%;
background-color: #f8f9fa;
box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
border-radius: 12px;
overflow: hidden;

.title {
    font-size: 18px;
    /* border: 1px solid red; */
    margin-top: -4%;
}

.desc {
    line-height: 1.5rem;
}
`

const HeaderDiv = styled.div`
/* border: 1px solid green; */
display: flex;
justify-content: space-between;
align-items: flex-end;
max-width: 100%;
`

const Movie = (props) => {
    const { movie } = props;

    return (
            <StyledDiv>
                <HeaderDiv>
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                </HeaderDiv>
                <p className='title'>{movie.original_title}</p>
                <p className='desc'>{movie.description}</p>
            </StyledDiv>
    )
}

export default Movie;
