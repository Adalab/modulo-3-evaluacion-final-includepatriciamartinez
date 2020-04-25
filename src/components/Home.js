import React from 'react';
import Filters from '../components/Filters';
import CharacterList from '../components/CharacterList';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div>
      <Filters handlerFilter={props.handlerFilter} value={props.value} />
      <CharacterList characters={props.characters} value={props.value} />
    </div>
  );
};

Home.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
  characters: PropTypes.array,
};

export default Home;
