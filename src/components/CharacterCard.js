import React from 'react';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <img className='card__img' src={props.character.image} alt={`${props.character.name} pic`} title={`${props.character.name} pic`}></img>
      <h4 className='card__title'>{props.character.name}</h4>
      <p className='card__description'>{props.character.species}</p>
      <p className='card__description'>{props.character.origin}</p>
    </li>
  );
};

export default CharacterCard;
