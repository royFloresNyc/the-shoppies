import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Results = ({ searchVal, movies}) => {

    const renderMovies = () => {
        return movies.map((movie => {
            return (
                <div className='border'>
                    <h5>{movie.Title}</h5>
                    <h5>({movie.Year})</h5>
                </div>
            )
        }))
    }

    return (
        <Container className='border'>
            <Row>
                <h3>{`Results for ${searchVal ? `"${searchVal}"` : '...'}`}</h3>
            </Row>
            <Row>
                {movies ? renderMovies() : null}
            </Row>
        </Container>
    )
}

export default Results