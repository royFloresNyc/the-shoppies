import { useEffect, useState } from 'react';
import './App.css';
import { Container, Col, Row} from 'react-bootstrap'

import SearchBar from './Components/SearchBar';
import Results from './Components/Results';
import { OMDB_KEY } from './keys';
import Nominations from './Components/Nominations';


function App() {
    const [searchVal, setSearchVal] = useState('')
    const [result, setResult] = useState('')
    const [nominations, setNominations] = useState('')

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
            <Nominations nominations={nominations}/>
            <SearchBar handleInputChange={(val) => setSearchVal(val)} value={searchVal}/>
            <Results searchVal={searchVal} movies={result}/>
        </div>
    );
}

export default App;
