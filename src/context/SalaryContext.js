import React, { createContext, useState, useContext } from 'react';

const SalaryContext = createContext();

export const useSalary = () => useContext(SalaryContext);

export const SalaryProvider = ({ children }) => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);

  // Function to reset all salary-related data
  const resetData = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };

  const addEarning = (earning) => setEarnings([...earnings, earning]);
  const addDeduction = (deduction) => setDeductions([...deductions, deduction]);
  const removeEarning = (index) => setEarnings(earnings.filter((_, i) => i !== index));
  const removeDeduction = (index) => setDeductions(deductions.filter((_, i) => i !== index));

  const calculateNetSalary = () => {
    const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, basicSalary);
    const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
    return totalEarnings - totalDeductions;
  };

  return (
    <SalaryContext.Provider value={{
      basicSalary,
      setBasicSalary,
      earnings,
      addEarning,
      removeEarning,
      deductions,
      addDeduction,
      removeDeduction,
      calculateNetSalary,
      resetData, // Provide the resetData function in the context
    }}>
      {children}
    </SalaryContext.Provider>
  );
};