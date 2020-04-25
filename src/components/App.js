import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import getApiData from '../services/getApiData';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  //event handler

  const handlerFilter = (data) => {
    setNameFilter(data.value);
  };

  //render

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;

    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <>
      <h1 className='title--big'>Rick and Morty</h1>
      <div className='.display-block'>
        <Filters handlerFilter={handlerFilter} />
        <CharacterList characters={filteredCharacters} />
        <Switch>
          <Route path='/character/:characterId' render={renderCharacterDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
