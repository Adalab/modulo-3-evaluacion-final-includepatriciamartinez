import React from 'react';
import CharacterCard from '../components/CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <section>
      <ul className='cards'>{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
