import React from 'react';
import CharacterList from '../components/CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

const App = () => {
  return (
    <>
      <h1 className='title--big'>Rick and Morty</h1>
      <Filters />
      <CharacterList />
      <CharacterDetail />
    </>
  );
};

export default App;
