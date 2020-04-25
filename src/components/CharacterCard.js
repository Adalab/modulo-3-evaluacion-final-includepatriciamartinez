import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <Link to={`/character/${props.character.id}`}>
        <img className='card__img' src={props.character.image} alt={`${props.character.name} pic`} title={`${props.character.name} pic`} />
        <h4 className='card__title'>{props.character.name}</h4>
        <p className='card__description'>{props.character.species}</p>
        <p className='card__description'>{props.character.origin}</p>
        <p className='card__description'>{props.character.status}</p>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
