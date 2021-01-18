import React from 'react'
import { Container, Row, Alert, Col} from 'react-bootstrap'

import NominationCard from './NominationCard'

const Nominations = ({ nominations, removeNomination, availableNominations }) => {

    const renderNominationCards = () => {
        const placeholder = [ 1, 2, 3, 4, 5]
        return placeholder.map( (el, indx) => <NominationCard key={indx} movie={nominations[indx]} removeNomination={removeNomination}/>)
    }
    
    return (
        <Container className='mt-3 App-container'>
            <Row className='p-1 pl-3 bg-dark text-white'>
                <h4><i>Your Nominations</i></h4>
            </Row>
            <Row xs={2} sm={5}>
                {renderNominationCards()}
            </Row> 
            <Row>
                {availableNominations && <Col>
                    <Alert className='App-alert'>
                        <p>You have <b>{availableNominations}</b> nomination {availableNominations > 1 ? 'slots' : 'slot'} available. Search for your favorite movies below and nominate them.</p>
                    </Alert>
                </Col>}
            </Row>
        </Container>
    )
}

export default Nominations