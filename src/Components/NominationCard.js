import React from 'react'
import { Col, Card } from 'react-bootstrap'

import Shoppies from '../Images/Shoppies.jpg'

const NominationCard = ({ movie }) => {
    console.log('!!!!Nom Card!!!')
    return(
        <Col>
            <Card>
                <Card.Img src={movie ? movie.Poster : Shoppies} style={{height: '300px'}}/>
            </Card>
        </Col>
    )
}

export default NominationCard