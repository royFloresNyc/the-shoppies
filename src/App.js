import { useState } from 'react';
import './App.css';
import { Container, Col, Row} from 'react-bootstrap'

import SearchBar from './Components/SearchBar';
import Results from './Components/Results';


function App() {
    const [searchVal, setSearchVal] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the SHOPPIES</h1>
      </header>
      <SearchBar handleInputChange={(val) => setSearchVal(val)} value={searchVal}/>
      <Container>
          <Row>
              <Col sm={6}>
                <Results/>
              </Col>
              <Col sm={6}>
                <p>{searchVal}</p>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
