import React from 'react';

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
      <input className='form__input-text' type='text' name='name' id='name' placeholder='Search your character here...' onChange={handlerChange} value={props.value} />
    </form>
  );
};

export default FilterByName;
