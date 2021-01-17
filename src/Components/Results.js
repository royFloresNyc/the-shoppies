import React from 'react'
import { Container, Row } from 'react-bootstrap'

import MovieCard from './MovieCard'

const Results = ({ searchVal, movies}) => {

    const renderMovies = () => {
        return movies.map((movie, indx) => <MovieCard key={indx} movie={movie}/>)
    }

    return (
        <Container className='border'>
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