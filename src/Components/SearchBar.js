import React from 'react'
import { Container, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleInputChange, value }) => {

    const localChangeHandler = (e) => {
        handleInputChange(e.target.value)
    }

    return (
        <Container className='mt-3 pt-3 pb-2 App-container'>
            <Row>
                <Col sm={{span: 10, offset: 1}}>
                    <Form>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FaSearch />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Search for a Movie..."
                                    value={value}
                                    onChange={localChangeHandler}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
