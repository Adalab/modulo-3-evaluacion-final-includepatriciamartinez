import React from 'react';

const CharacterDetail = () => {
  return (
    <div className='modal modal__hidden'>
      <div className='modal__dialog'>
        <div className='modal__content'>
          <header className='modal__header'>
            <h2 className='modal__title'>Woman Rick</h2>
            <span className='modal__close icon fas fa-times'></span>
          </header>
          <section>
            <img className=' card__img' src='https://rickandmortyapi.com/api/character/avatar/382.jpeg' alt='character pic'></img>
            <ul className='ml-1 mt-1'>
              <li>Nombre:Woman Rick</li>
              <li>Especie:Alien</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
