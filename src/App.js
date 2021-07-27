import React, { useState, useEffect } from 'react';
import './App.css';

import { InputForm } from './components/InputForm';
import { OutputForm } from './components/OutputForm';

const formatTipValue = num => num.toFixed(2) + '$';

function App() {
  // Input-Values
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState('0');
  const [people, setPeople] = useState(0);

  // Output-Values
  const [tipAmount, setTipAmount] = useState('0.00$');
  const [total, setTotal] = useState('0.00$');

  // Calculation of Output after each Input-Change and Render
  useEffect(() => {
    let tipValue;
    if (bill === 0 || tip === '0' || people === 0) {
      setTipAmount('0.00$');
      setTotal('0.00$');
    } else {
      if (tip.includes('%')) {
        tipValue = Number.parseInt(tip.slice(0, -1)) / 100;
        setTipAmount(formatTipValue((bill * tipValue) / people));
        setTotal(formatTipValue((bill * (tipValue + 1)) / people));
      } else {
        tipValue = Number.parseFloat(tip);
        setTipAmount(formatTipValue(tipValue / people));
        setTotal(formatTipValue((bill + tipValue) / people));
      }
    }
  }, [bill, tip, people]);

  const handleBillChange = e => setBill(Number.parseFloat(e.target.value));

  const handleTipChange = tip => setTip(tip);

  const handlePeopleChange = e => setPeople(Math.floor(e.target.value));

  const handleReset = () => {
    setBill(0);
    setTip(5);
    setPeople(0);
  }

  document.addEventListener("touchstart", function () { }, true);


  return (
    <div className='Container'>
      <h1>SPLI<br />TTER</h1>
      <div className='App'>

        <InputForm
          billValue={bill}
          peopleValue={people}
          onBillChange={handleBillChange}
          onPeopleChange={handlePeopleChange}
          onTipChange={handleTipChange}
        />
        <OutputForm
          onReset={handleReset}
          tipAmount={tipAmount}
          total={total}
        />

      </div>

    </div>
  );
}

export default App;