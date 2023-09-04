import React from "react";
import classes from './InvestHeader.module.css';

import logo from './images/investment-calculator-logo.png';

function InvestHeader() {
    return (
        <header className={classes.investheader}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    )
}

export default InvestHeader;