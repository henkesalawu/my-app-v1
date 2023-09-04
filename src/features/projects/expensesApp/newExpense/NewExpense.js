import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';



function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormDisplayed(false);
    };

    const [formDisplayed, setFormDisplayed] = useState(false);

    const formDisplayHandler = () => {
        setFormDisplayed(true);
    }

    const hideFormHandler = () => {
        setFormDisplayed(false);
    };

    return (
        <div className='new-expense'>
        {!formDisplayed && <button onClick={formDisplayHandler}>Add Expense</button>}
        {formDisplayed && (
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onHideForm={hideFormHandler}
            />)
            }
        </div>
    );
};

export default NewExpense;