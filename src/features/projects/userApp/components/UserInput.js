import React, { useEffect, useRef, useState} from "react";
import UserCard from "./UserCard";
import classes from './UserInput.module.css';
import UserButton from "./UserButton";

//ref to read a value best
//instead of state

function UserInput(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errors, setErrors] = useState({});

    const validateInputs = (name, age) => {
        let errors = {};
        if (name.length < 2 || typeof name !== 'string') {
           errors.username =  'Username is invalid'
        }
        if (!age.length || age < 18 || isNaN(age)) {
            errors.age = 'Age is invalid. Min age is 18'
        }
        return errors;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('clicked')

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        setErrors(validateInputs(enteredName,enteredAge));
        
        if (Object.keys(errors).length === 0) {
            props.onAddUser(enteredName,enteredAge);
        }
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }



    return (
        <>
        <UserCard className={classes.userinput}>
        <form  onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input  
        type="text" 
        id="username" 
        ref={nameInputRef}
        required
        style={{ border: errors.username ? "1px solid red" : null}}
        />
        {errors.username ? (
            <p className="error">Username is invalid</p>
        ) : null}
        <label htmlFor="age">Age(Years)</label>
        <input 
        type="number" 
        id="age" 
        ref={ageInputRef}
        required
        style={{ border: errors.age ? "1px solid red" : null}}
        />
        {errors.age ? (
            <p className="error">Invalid age - min age is 18.</p>
        ) : null}
        <UserButton type="submit">Add User</UserButton>
        </form>
    </UserCard>
    </>
    );
}

export default UserInput;