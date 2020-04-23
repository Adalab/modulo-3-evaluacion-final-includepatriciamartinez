import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import getApiData from '../services/getApiData';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <>
      <h1 className='title--big'>Rick and Morty</h1>
      <div className='.display-block'>
        <Filters />
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </>
  );
};

export default App;
