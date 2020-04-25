import React from 'react';
import FilterByName from '../components/FilterByName';
import PropTypes from 'prop-types';

const Filters = (props) => {
  return (
    <section>
      <FilterByName handlerFilter={props.handlerFilter} value={props.value} />
    </section>
  );
};

Filters.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filters;
