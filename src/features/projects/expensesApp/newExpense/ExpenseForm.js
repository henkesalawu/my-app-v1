import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);}

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);}

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);}

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        //communicate up, with parent
        props.onSaveExpenseData(expenseData); //execute it here, data passed will be passed to newexpense
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };


   return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number'value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                <button type="button" onClick={props.onHideForm}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            )
    }
    

   
    //when update state and u depend on prev state
    //shld use altenrtative form of state updateing function
    //setUserInput (() =>{});
    
//Could update in one go like this
   // const [userInput, setUserInput] = useState({
   //     enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''});

   // const titleChangeHandler = (event) => {
        //setUserInput({
          //  ...userInput,
            //enteredTitle: event.target.value,
        //})
        //WHEN update state and depend on prev state u shld rather do it like this:
      //  setUserInput((prevState) => {
      //      return {...prevState, enteredTitle: event.target.value};
     //   });

    //const amountChangeHandler = (event) => { 
       // setUserInput({
       //     ...userInput,
        //    enteredAmount: event.target.value
      //  })
    //const dateChangeHandler = (event) => {


        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
       // });
    //};

    //create shared handler function instead diff function for each
    // const inputChangeHandler = (identifier, value) => {};
    //identify diff inputs and update correct state based on identifier passed with the value
    // if(indetifier === 'title') {
        //setEnteredTitle(value);
    //} else if (identifier === 'date') {
        //setEnteredDate(value);
        //}else {
            //setEnteredAmount(value);}}};
            //in onChange in html element we do:
            //in title input <input onChange={(event) => inputChangeHandler('title', event.target.value)}


    


export default ExpenseForm;