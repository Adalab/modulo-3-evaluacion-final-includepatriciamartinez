import React from 'react';

const CharacterCard = () => {
  return (
    <li className='card'>
      <img className='card__img' src='https://rickandmortyapi.com/api/character/avatar/361.jpeg' alt='character pic'></img>
      <h4 className='card__title'>Woman Rick</h4>
      <p className='card__description'>Alien</p>
    </li>
  );
};

export default CharacterCard;
