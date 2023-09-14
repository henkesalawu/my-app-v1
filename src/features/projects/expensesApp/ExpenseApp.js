import Expenses from "./components/Expenses";
import React, { useState } from 'react';

import NewExpense from "./newExpense/NewExpense";
import { Container } from "semantic-ui-react";
import DUMMY_EXPENSES from "../../../app/api/expensesData";



function ExpenseApp() {
const [ expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <Container className="main">
    <div className="expense">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
    </Container>
  );
}

export default ExpenseApp;