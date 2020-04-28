import React from 'react';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };

  return (
    <form>
      <label className='form___title' htmlFor='gender'>
        Género
      </label>

      <select className='form__input-text display-block' name='gender' id='gender' onChange={handleChange}>
        <option value='All'>Todos</option>
        <option value='Female'>Mujer</option>
        <option value='Male'>Hombre</option>
        <option value='unknown'>Desconocido</option>
      </select>
    </form>
  );
};
export default FilterByGender;
