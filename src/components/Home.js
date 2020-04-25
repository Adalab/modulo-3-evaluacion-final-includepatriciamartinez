import React from 'react';
import Filters from '../components/Filters';
import CharacterList from '../components/CharacterList';

const Home = (props) => {
  return (
    <div>
      <Filters handlerFilter={props.handlerFilter} value={props.value} />
      <CharacterList characters={props.characters} value={props.value} />
    </div>
  );
};

export default Home;
