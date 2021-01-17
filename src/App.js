import { useEffect, useState } from 'react';
import './App.css';
import { Container, Col, Row} from 'react-bootstrap'

import SearchBar from './Components/SearchBar';
import Results from './Components/Results';
import { OMDB_KEY } from './keys';


function App() {
    const [searchVal, setSearchVal] = useState('')
    const [result, setResult] = useState('')

    const fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?s=${encodeURI(searchVal)}&apikey=${OMDB_KEY}`)
        .then(resp => resp.json())
        .then(data => setResult(data.Search))
        .catch(error => console.log(error))
    }
    
    useEffect(fetchMovies, [searchVal])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the SHOPPIES</h1>
            </header>
            <SearchBar handleInputChange={(val) => setSearchVal(val)} value={searchVal}/>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Results searchVal={searchVal} movies={result}/>
                    </Col>
                    <Col sm={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
