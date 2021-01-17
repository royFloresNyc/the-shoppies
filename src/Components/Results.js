import React from 'react'
import { Container, Row } from 'react-bootstrap'

import MovieCard from './MovieCard'

const Results = ({ searchVal, movies, addNomination, isNominated}) => {

    const renderMovies = () => {
        return movies.map((movie, indx) => <MovieCard 
            key={indx} movie={movie} 
            addNomination={addNomination}
            isNominated={isNominated}
        />)
    }

    return (
        <Container>
            <Row className='pl-3'>
                Results for {searchVal ? `"${searchVal}"` : '...'}
            </Row>
            <Row xs={2} sm={5}>
                {movies ? renderMovies() : null}
            </Row>
        </Container>
    )
}

export default Results