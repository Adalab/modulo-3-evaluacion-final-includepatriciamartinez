import React from 'react';
import Filters from '../components/Filters';
import CharacterList from '../components/CharacterList';

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <Filters handlerFilter={props.handlerFilter} />
      <CharacterList characters={props.characters} />
    </div>
  );
};

export default Home;
