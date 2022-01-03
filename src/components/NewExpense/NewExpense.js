import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()

    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    // console.log(expenseData);
  };

  const startedEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className='newexpense'>
      {!isEditing && <button onClick={startedEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
      }
    </div>
  );
}

export default NewExpense;