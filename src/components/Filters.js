import React from 'react';
import FilterByName from '../components/FilterByName';

const Filters = () => {
  const handlerChange = (ev) => {
    console.log(ev.type, ev.target.value);
  };
  return (
    <section>
      <form>
        <FilterByName />
      </form>
    </section>
  );
};

export default Filters;
