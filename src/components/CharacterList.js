import React from 'react';
import CharacterCard from '../components/CharacterCard';

const CharacterList = () => {
  return (
    <section>
      <ul className='cards'>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ul>
    </section>
  );
};

export default CharacterList;
