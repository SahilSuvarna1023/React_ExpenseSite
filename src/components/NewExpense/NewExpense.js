import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {
  return (
    <div className='newexpense'>
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;