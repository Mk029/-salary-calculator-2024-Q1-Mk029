import React, { useState } from 'react';
import { useSalary } from '../context/SalaryContext';

const Deductions = () => {
  const { deductions, addDeduction, removeDeduction } = useSalary();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddDeduction = () => {
    addDeduction({ name, amount: parseFloat(amount) });
    setName('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Deductions</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} placeholder="Amount" />
      <button onClick={handleAddDeduction}>Add Deduction</button>
      <ul>
        {deductions.map((deduction, index) => (
          <li key={index}>
            {deduction.name}: {deduction.amount}
            <button onClick={() => removeDeduction(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deductions;

