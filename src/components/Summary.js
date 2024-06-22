import React from 'react';
import { useSalary } from '../context/SalaryContext';

const Summary = () => {
  const {
    basicSalary,
    earnings,
    deductions,
    calculateNetSalary,
    resetData,
  } = useSalary();

  // Calculate Total Earnings
  const calculateTotalEarnings = () => {
    let totalEarnings = basicSalary;
    earnings.forEach(earning => {
      totalEarnings += earning.amount;
    });
    return totalEarnings;
  };

  // Calculate Total Deductions
  const calculateTotalDeductions = () => {
    let totalDeductions = 0;
    deductions.forEach(deduction => {
      totalDeductions += deduction.amount;
    });
    return totalDeductions;
  };

  // Calculate Employee EPF (8%)
  const calculateEmployeeEPF = () => {
    const totalEarnings = calculateTotalEarnings();
    return totalEarnings * 0.08;
  };

  // Calculate APIT
  const calculateAPIT = () => {
    const totalEarnings = calculateTotalEarnings();
    const grossSalary = totalEarnings - calculateTotalDeductions();
    // Implement APIT calculation logic here based on your requirements
    // For simplicity, I'm returning a dummy value
    return grossSalary * 0.18 - 25500;
  };

  // Calculate Employer EPF (12%)
  const calculateEmployerEPF = () => {
    const totalEarnings = calculateTotalEarnings();
    return totalEarnings * 0.12;
  };

  // Calculate Employer ETF (3%)
  const calculateEmployerETF = () => {
    const totalEarnings = calculateTotalEarnings();
    return totalEarnings * 0.03;
  };

  // Calculate Cost to Company (CTC)
  const calculateCTC = () => {
    const totalEarnings = calculateTotalEarnings();
    const totalEmployeeEPF = totalEarnings * 0.12;
    const totalEmployerETF = totalEarnings * 0.03;
    return totalEarnings + totalEmployeeEPF + totalEmployerETF;
  };

  const handleReset = () => {
    resetData(); // Call the resetData function when the reset button is clicked
  };

  return (
    <div>
      <h3>Summary</h3>
      <p>Basic Salary: {basicSalary}</p>
      <p>Gross Earning: {calculateTotalEarnings()}</p>
      <p>Gross Deduction: {calculateTotalDeductions()}</p>
      <p>Employee EPF (8%): {calculateEmployeeEPF()}</p>
      <p>APIT: {calculateAPIT()}</p>
      <p>Employer EPF (12%): {calculateEmployerEPF()}</p>
      <p>Employer ETF (3%): {calculateEmployerETF()}</p>
      <p>Cost to Company: {calculateCTC()}</p>
      <p>Net Salary: {calculateNetSalary()}</p>
      <button onClick={handleReset}>Reset</button> {/* Add a reset button */}
    </div>
  );
};

export default Summary;

