import React from 'react'
import { Col, Card, Button} from 'react-bootstrap'

import Shoppies from '../Images/Shoppies.jpg'

const NominationCard = ({ movie, removeNomination }) => {

    const renderNominationCard = () => {
        return (
            <>
                <Card >
                    <Card.Img src={movie.Poster} style={{height: '300px'}}/> 
                </Card>
                <Button variant='warning' onClick={() => removeNomination(movie.imdbID)} className='mt-3'>Remove</Button>
            </>
        )
    }

    const renderPlaceHolderCard = () => {
        return <Card>
            <Card.Img src={Shoppies} style={{height: '300px'}}/>
        </Card>
    }

    return(
        <Col className='pt-3 pb-3'>
            {movie? renderNominationCard() : renderPlaceHolderCard()}
        </Col>
    )
}

export default NominationCard