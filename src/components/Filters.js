import React from 'react';
import FilterByName from '../components/FilterByName';

const Filters = (props) => {
  return (
    <section>
      <FilterByName handlerFilter={props.handlerFilter} value={props.value} />
    </section>
  );
};

export default Filters;
