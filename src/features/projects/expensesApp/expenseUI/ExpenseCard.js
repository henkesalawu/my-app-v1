import React from 'react';
import './ExpenseCard.css';

function ExpenseCard(props) {
    const classes = 'expense_card ' + props.className;
    
    return <div className={classes}>{props.children}</div>
}

export default ExpenseCard;