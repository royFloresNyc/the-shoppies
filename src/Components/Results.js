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
        <Container className='mt-3 App-container'>
            {searchVal && <Row className='pl-3 pt-1 bg-dark'>
                <h4 className='text-white' ><i>{`Results for "${searchVal}"`}</i></h4>
                </Row>}
            <Row xs={2} sm={5}>
                {movies ? renderMovies() : null}
            </Row>
        </Container>
    )
}

export default Results