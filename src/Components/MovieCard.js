import React, { useEffect, useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'

const MovieCard = ({ movie, addNomination, isNominated }) => {
    const [btnClicked, setBtnClicked] = useState(false)

    const handleBtnClick = () => {
        addNomination(movie)
        setBtnClicked(true)
    }

    const nominated = isNominated(movie.imdbID)

    return (
        <Col className='pt-3'>
            <Card>
                <Card.Img variant='top' src={movie.Poster} style={{height: '300px', backgroundColor: 'black'}}/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                    <Button onClick={handleBtnClick} variant='warning' disabled={nominated}>{nominated ? 'Nominated' : 'Nominate'}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MovieCard 