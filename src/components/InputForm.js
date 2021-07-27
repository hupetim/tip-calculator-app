import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InputBig } from './InputBig';
import { InputSmall } from './InputSmall';
import { Button } from './Button';

export const InputForm = props => {
  const [tipState, setTipState] = useState({
    5: '',
    10: '',
    15: '',
    25: '',
    50: '',
    custom: ''
  })

  const getTipFromBtn = e => {
    const tip = e.target.innerText.slice(0, -1);
    setTipState({
      5: '',
      10: '',
      15: '',
      25: '',
      50: '',
      custom: ''
    });
    setTipState(prev => ({
      ...prev,
      [tip]: 'active'
    }))
    props.onTipChange(tip + '%');
  };

  const handleCustomTipChange = e => {
    const customTip = e.target.value;
    if (customTip === '') {
      setTipState({
        5: 'active',
        10: '',
        15: '',
        25: '',
        50: '',
        custom: ''
      });
      props.onTipChange('5%');
    } else {
      setTipState({
        5: '',
        10: '',
        15: '',
        25: '',
        50: '',
        custom: customTip
      });
      props.onTipChange(customTip);
    }
  }

  return (
    <div className='form input-form' >
      <InputBig
        title='Bill'
        onChange={props.onBillChange}
        value={props.billValue}
      />

      <div className='tips' >
        <p>Select Tip %</p>
        <div className='tip-grid'>
          <Button type='tip' value='5' class={tipState[5]} onTipSelect={getTipFromBtn} />
          <Button type='tip' value='10' class={tipState[10]} onTipSelect={getTipFromBtn} />
          <Button type='tip' value='15' class={tipState[15]} onTipSelect={getTipFromBtn} />
          <Button type='tip' value='25' class={tipState[25]} onTipSelect={getTipFromBtn} />
          <Button type='tip' value='50' class={tipState[50]} onTipSelect={getTipFromBtn} />
          <InputSmall value={tipState.custom} onChange={handleCustomTipChange} />
        </div>
      </div>

      <InputBig
        title='Number of People'
        onChange={props.onPeopleChange}
        value={props.peopleValue}
      />
    </div>
  );
}

InputForm.propTypes = {
  billValue: PropTypes.number,
  peopleValue: PropTypes.number,
  onBillChange: PropTypes.func,
  onPeopleChange: PropTypes.func,
  onTipChange: PropTypes.func
}