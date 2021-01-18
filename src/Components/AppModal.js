import React from 'react';
import { Modal, Image, Row, Col} from 'react-bootstrap';

import glitter5 from '../Images/glitter5.png'

function AppModal({ modalVisible, hideModal}) {
    return (
        <div>
            <Modal show={modalVisible} onHide={hideModal} centered>
                <Modal.Header className='bg-secondary' closeButton className='App-modal-header'></Modal.Header>
                <Modal.Body className="text-center App-modal-body" >
                    <h3>You have successfully entered</h3>
                    <Row>
                        <Col sm={{span: 6, offset: 3}}>
                            <Image src={glitter5} fluid alt='glitter number five'/>
                        </Col>
                    </Row>
                    <h3>movie nominations!</h3>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AppModal;