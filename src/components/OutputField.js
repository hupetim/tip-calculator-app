import React from 'react';
import PropTypes from 'prop-types';

export const OutputField = props => {
  return (
    <div className='output-field'>
      <div className='output-desc'>
        <p>{props.title}</p>
        <p>/ person</p>
      </div>
      <p>{props.value}</p>
    </div>
  );
}

OutputField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}