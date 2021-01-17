import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleInputChange, value }) => {

    const localChangeHandler = (e) => {
        handleInputChange(e.target.value)
    }

    return (
        <Container>
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
        </Container>
    )
}

export default SearchBar
