import React from 'react'
import { Container, Row } from 'react-bootstrap'

import NominationCard from './NominationCard'

const Nominations = ({ nominations, removeNomination }) => {

    const renderNominationCards = () => {
        const placeholder = [ 1, 2, 3, 4, 5]
        return placeholder.map( (el, indx) => <NominationCard key={indx} movie={nominations[indx]} removeNomination={removeNomination}/>)
    }
    
    return (
        <Container className='pt-5 pb-5'>
            <Row xs={2} sm={5}>
                {renderNominationCards()}
            </Row>
        </Container>
    )
}

export default Nominations