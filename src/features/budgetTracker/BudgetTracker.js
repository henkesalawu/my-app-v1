import Transactions from "./Transactions";
import Budgets from "./Budgets";
import React from "react";
import './budgetTracker.css';
import { Container } from "semantic-ui-react";

function BudgetTracker() {
  return (
    <Container className="main">
    <div className="budget_tracker">
      <header className="budget_tracker-header">
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
    </Container>
  );
}

export default BudgetTracker;