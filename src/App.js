import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar';
import Results from './Components/Results';
import Nominations from './Components/Nominations';
import AppModal from './Components/AppModal';
import AppHeader from './Components/AppHeader';


function App() {
    const [searchVal, setSearchVal] = useState('')
    const [result, setResult] = useState('')
    const [nominations, setNominations] = useState([])
    const [completeModalVisible, setCompleteModalVisible] = useState(false)
    const [hideNomBtn, setHideNomBtn] = useState(false)

    const fetchMovies = () => {
        fetch(`https://www.omdbapi.com/?s=${encodeURI(searchVal)}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
        .then(resp => resp.json())
        .then(data => setResult(data.Search))
        .catch(error => console.log(error))
    }

    const addNomination = (movie) =>{
        if (!hasFiveNoms()) {
            setNominations([...nominations, movie])
        }
    }

    const hasFiveNoms = () => {
        return nominations.length >= 5
    }
    
    useEffect(() => {
        if (hasFiveNoms()){
           setCompleteModalVisible(true) 
           setHideNomBtn(true)
        } else {
            setHideNomBtn(false)
        }
    }, [nominations])

    
    useEffect(fetchMovies, [searchVal])

    const isNominated = (movieId) =>{
        return nominations.some(movie => movie.imdbID === movieId)
    }

    const removeNomination = (movieId) => {
        let newArray = [...nominations]
        let indx = newArray.findIndex(movie => movie.imdbID === movieId)
        newArray.splice(indx, 1)
        setNominations(newArray)
    }

    return (
        <div className="App">
            <AppHeader/>
            <Nominations nominations={nominations} availableNominations={5 - nominations.length} removeNomination={removeNomination}/>
            <SearchBar handleInputChange={(val) => setSearchVal(val)} value={searchVal}/>
            <Results searchVal={searchVal} movies={result} addNomination={addNomination} isNominated={isNominated} hideNomBtn={hideNomBtn}/>
            <AppModal modalVisible={completeModalVisible} hideModal={() => setCompleteModalVisible(false)}/>
        </div>
    );
}

export default App;
