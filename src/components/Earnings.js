import React, { useState } from 'react';
import { useSalary } from '../context/SalaryContext';

const Earnings = () => {
  const { earnings, addEarning, removeEarning } = useSalary();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [epfApplicable, setEpfApplicable] = useState(false);

  const handleAddEarning = () => {
    addEarning({ name, amount: parseFloat(amount), epfApplicable });
    setName('');
    setAmount(0);
    setEpfApplicable(false);
  };

  return (
    <div>
      <h3>Earnings</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} placeholder="Amount" />
      <label>
        <input type="checkbox" checked={epfApplicable} onChange={(e) => setEpfApplicable(e.target.checked)} />
        EPF/ETF
      </label>
      <button onClick={handleAddEarning}>Add Earning</button>
      <ul>
        {earnings.map((earning, index) => (
          <li key={index}>
            {earning.name}: {earning.amount} {earning.epfApplicable ? '(EPF/ETF)' : ''}
            <button onClick={() => removeEarning(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Earnings;
