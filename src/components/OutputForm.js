import React from 'react';
import PropTypes from 'prop-types';

import { OutputField } from './OutputField';
import { Button } from './Button';

export const OutputForm = props => {
  return (
    <div className='form output-form' >
      <OutputField title='Tip Amount' value={props.tipAmount} />
      <OutputField title='Total' value={props.total} />
      <Button type='reset' value='RESET' onReset={props.onReset} />
    </div>
  );
}

OutputField.propTypes = {
  onReset: PropTypes.func,
  tipAmount: PropTypes.string,
  total: PropTypes.string
}