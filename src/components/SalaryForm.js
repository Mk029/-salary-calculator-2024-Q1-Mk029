import React from 'react';
import { useSalary } from '../context/SalaryContext';

const SalaryForm = () => {
  const { basicSalary, setBasicSalary } = useSalary();

  return (
    <div>
      <h3>Basic Salary</h3>
      <input
        type="number"
        value={basicSalary}
        onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
        placeholder="Basic Salary"
      />
    </div>
  );
};

export default SalaryForm;
