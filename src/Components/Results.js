import React from 'react'
import { Container, Row } from 'react-bootstrap'

import MovieCard from './MovieCard'

const Results = ({ searchVal, movies, addNomination, isNominated, hideNomBtn}) => {

    const renderMovies = () => {
        return movies.map((movie, indx) => <MovieCard 
            key={indx} movie={movie} 
            addNomination={addNomination}
            isNominated={isNominated}
            hideNomBtn={hideNomBtn}
        />)
    }

    return (
        <Container className='App-container'>
            <Row className='pl-3'>
                {searchVal ? `Results for "${searchVal}"` : null}
            </Row>
            <Row xs={2} sm={5}>
                {movies ? renderMovies() : null}
            </Row>
        </Container>
    )
}

export default Results