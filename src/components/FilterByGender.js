import React from 'react';
import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const handlerChange = (ev) => {
    props.handlerFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label className='form__label display-block' htmlFor='gender'>
        Gender
      </label>
      <select className='form__input-text' type='text' name='gender' id='gender' onChange={handlerChange}>
        <option value='all'>All</option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
        <option value='unknown'>Unknown</option>
      </select>
    </form>
  );
};

FilterByGender.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default FilterByGender;
