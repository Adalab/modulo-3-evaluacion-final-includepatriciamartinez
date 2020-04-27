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
    <form className='form__input-text' onSubmit={handlerSubmit}>
      <input type='text' name='name' id='name' placeholder='Search your character here' onChange={handlerChange} value={props.value} />
    </form>
  );
};

FilterByName.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default FilterByName;
