import React from 'react';
import FilterByName from '../components/FilterByName';
import FilterByGender from '../components/FilterByGender';
import PropTypes from 'prop-types';
import FilterByEpisode from './FilterByEpisode';

const Filters = (props) => {
  return (
    <section>
      <FilterByName handlerFilter={props.handlerFilter} value={props.value} />
      <FilterByGender handleFilter={props.handlerFilter} />
      <FilterByEpisode handlerFilter={props.handlerFilter} />
    </section>
  );
};

Filters.propTypes = {
  handlerFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filters;
