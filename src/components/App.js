import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Home from '../components/Home';
import getApiData from '../services/getApiData';
import '../stylesheets/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [episodeFilter, setEpisodeFilter] = useState('');
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  //event handler

  const handlerFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'episode') {
      setEpisodeFilter(data.value);
    }
  };
  console.log('name:', nameFilter);
  console.log('episode:', episodeFilter);

  //render

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      console.log(character);
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
      <div className='display-block'>
        <Switch>
          <Route exact path='/'>
            <Home handlerFilter={handlerFilter} characters={filteredCharacters} value={nameFilter} />
          </Route>
          <Route path='/character/:characterId' render={renderCharacterDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
