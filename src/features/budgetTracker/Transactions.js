import React from "react";
import { useSelector } from "react-redux";
import { selectFlattenedTransactions } from "./budgetRedux/transactionsSlice";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Transactions = () => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="comments-container">
      <TransactionList transactions={transactions} />
      <TransactionForm />
    </div>
  );
};

export default Transactions;