import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const handlerChange = (ev) => {
    props.handlerFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label className='form__label' htmlFor='name'>
        Name character
      </label>
      <input className='form__input-text' type='text' name='name' id='name' placeholder='Search your character here...' onChange={handlerChange} value={props.value} />
    </form>
  );
};

FilterByName.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default FilterByName;
