import React from 'react';

const FilterByName = (props) => {
  const handlerChange = (ev) => {
    props.handlerFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form>
      <input className='form__input-text' type='text' name='name' id='name' onChange={handlerChange} />
    </form>
  );
};

export default FilterByName;
