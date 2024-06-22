import React from 'react';
import { SalaryProvider } from './context/SalaryContext';
import SalaryForm from './components/SalaryForm';
import Earnings from './components/Earnings';
import Deductions from './components/Deductions';
import Summary from './components/Summary';

function App() {
  return (
    <SalaryProvider>
      <div className="App">
        <h1>Salary Calculator</h1>
        <SalaryForm />
        <Earnings />
        <Deductions />
        <Summary />
      </div>
    </SalaryProvider>
  );
}

export default App;
