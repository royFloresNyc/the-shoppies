import React from 'react';
import { Modal } from 'react-bootstrap';

function AppModal({ modalVisible, hideModal}) {
    return (
        <div>
            <Modal show={modalVisible} onHide={hideModal} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="text-center">
                    <h3>You have successfully entered</h3>
                    <h1>5</h1>
                    <h3>movie nominations!</h3>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AppModal;