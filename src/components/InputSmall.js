import React from 'react';
import PropTypes from 'prop-types';

export const InputSmall = props => {
  return (
    <div className='input-small'>
      <input
        type='number'
        step=".01"
        min='0'
        placeholder='Custom'
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

InputSmall.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}