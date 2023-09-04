import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseCard from '../expenseUI/ExpenseCard';

//stateless component = presentetional/dumb component
//to output data
//no state
function ExpenseItem({date, title, amount}) {

    return (
        <li>
        <ExpenseCard className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{amount}</div>
            </div>
        </ExpenseCard>
        </li>
    );
}

export default ExpenseItem;