import React from 'react';
import CharacterCard from '../components/CharacterCard';

const CharacterList = (props) => {
  console.log(props);

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

export default CharacterList;
