import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className='modal'>
      <div className='modal__dialog'>
        <div className='modal__content'>
          <header className='modal__header'>
            <h2 className='modal__title'>{props.character.name}</h2>
            <Link to='/'>
              <span className='modal__close icon fas fa-times'></span>
            </Link>
          </header>
          <section>
            <img className=' card__img' src={props.character.image} alt={`${props.character.name} pic`}></img>
            <ul className='ml-1 mt-1'>
              <li>Species:{props.character.species}</li>
              <li>Origin:{props.character.origin}</li>
              <li>Episode:{props.character.episode.lenght}</li>
              <li>Status:{props.character.status}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
