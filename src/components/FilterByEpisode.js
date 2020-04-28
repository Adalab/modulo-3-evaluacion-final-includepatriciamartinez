import React from 'react';
import PropTypes from 'prop-types';

const FilterByEpisode = (props) => {
  const handlerChange = (ev) => {
    props.handlerFilter({
      value: ev.target.value,
      key: 'episode',
    });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label className='form__label display-block' htmlFor='episodes'>
        Number episodes
      </label>
      <input className='form__input-text' type='text' name='episode' id='episode' placeholder='Search your number episode' onChange={handlerChange} value={props.value} />
    </form>
  );
};

FilterByEpisode.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default FilterByEpisode;
