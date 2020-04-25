import React from 'react';
import CharacterCard from '../components/CharacterCard';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const CharacterList = (props) => {
  if (props.characters.length > 0) {
    const characterElements = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
    return (
      <section>
        <ul className='cards'>{characterElements}</ul>
      </section>
    );
  } else {
    return <p>"No hay ningún personaje que coincida con la palabra {props.value}".</p>;
  }
};

CharacterList.propTypes = {
  character: PropTypes.array,
};

export default CharacterList;
