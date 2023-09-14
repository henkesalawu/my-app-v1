import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "./budgetRedux/transactionsSlice";

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTransaction(transaction));
  };

  return (
    <li className="new-transaction">
      <span>
        {transaction.amount} – {transaction.category}{" "}
        <span className="description">( {transaction.description} )</span>
      </span>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
}
