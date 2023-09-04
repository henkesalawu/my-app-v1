import React from "react";
import classes from './InvestTable.module.css';

function InvestTable({items, initialInvestment}) {
  console.log(items);

    return (
        <table className={classes.investresult}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {items.map((calculation) => (
          <tr>
        <td>{calculation.year}</td>
        <td>${calculation.totalSavings}</td>
        <td>${calculation.yearlyInterest}</td>
        <td>${calculation.totalSavings - initialInvestment - calculation.yearlyContribution * calculation.year}</td>
        <td>${initialInvestment + calculation.yearlyContribution * calculation.year}</td>
        </tr>
        ))}
        </tbody>
      </table>
    )
}

export default InvestTable;