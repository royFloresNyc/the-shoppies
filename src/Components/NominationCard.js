import React from 'react'
import { Col, Card } from 'react-bootstrap'

import Shoppies from '../Images/Shoppies.jpg'

const NominationCard = ({ movie }) => {
    return(
        <Col className='pt-3 pb-3'>
            <Card>
                <Card.Img src={movie ? movie.Poster : Shoppies} style={{height: '300px'}}/>
            </Card>
        </Col>
    )
}

export default NominationCard