import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  return (
    <button
      className={props.class + ' btn-' + props.type}
      onClick={props.type === 'reset' ? props.onReset : props.onTipSelect}
      value={props.value}
    >{props.value}{props.type === 'tip' && '%'}</button>
  )
}

Button.propTypes = {
  class: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onReset: PropTypes.func
}