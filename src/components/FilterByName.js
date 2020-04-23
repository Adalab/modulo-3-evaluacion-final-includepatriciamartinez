import React from 'react';

const FilterByName = () => {
  const handlerChange = (ev) => {
    console.log(ev.type, ev.target.value);
  };
  return (
    <>
      <input className='form__input-text' type='text' name='name' id='name' onChange={handlerChange} />
    </>
  );
};

export default FilterByName;
