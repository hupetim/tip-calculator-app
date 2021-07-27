import React from 'react';
import PropTypes from 'prop-types';

export const InputBig = props => {
  return (
    <div
      className='input-big'
      id={props.title === 'Bill' ? 'input-big-1' : 'input-big-2'}
    >
      <p>{props.title}</p>
      {/* <icon src='../../public/images/icon-dollar.svg' alt='icon' /> */}
      <label>
        <input
          type='number'
          placeholder='0'
          value={props.value !== 0 ? props.value : ''}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

InputBig.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number
}