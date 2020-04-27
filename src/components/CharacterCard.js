import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const CharacterCard = (props) => {
  const getGender = () => {
    if (props.character.gender === 'Female') {
      return 'Mujer';
    } else if (props.character.gender === 'Male') {
      return 'Hombre';
    } else {
      return 'Desconocido';
    }
  };
  return (
    <li>
      <Link className='card' to={`/character/${props.character.id}`}>
        <img className='card__img' src={props.character.image} alt={`${props.character.name} pic`} title={`${props.character.name} pic`} />
        <h4 className='card__title'>{props.character.name}</h4>
        <p className='card__description'>
          {props.character.species}/{getGender()}
        </p>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
