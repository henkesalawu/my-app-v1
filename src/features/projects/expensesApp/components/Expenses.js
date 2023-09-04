import React, { useState} from "react";
import ExpenseCard from '../expenseUI/ExpenseCard';
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };
//filter by chosen year the output list
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <ExpenseCard className="expenses">
    <ExpenseFilter 
    selected={filteredYear} 
    onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>

  
    </ExpenseCard>
    </div>
  )
}

export default Expenses;