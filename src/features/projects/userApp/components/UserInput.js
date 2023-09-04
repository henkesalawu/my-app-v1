import React, {useState, useRef} from "react";
import UserCard from "./UserCard";
import classes from './UserInput.module.css';
import UserButton from "./UserButton";
import UserErrorAlert from './UserErrorAlert';

//ref to read a value best
//instead of state

function UserInput(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).',
            });
            return;
        }
        props.onAddUser(enteredName,enteredAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        
    };

    const errorHandler = (event) => {
        setError(null);
    };

    return (
        <>
        {error && (
           <UserErrorAlert
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
        )}
        <UserCard className={classes.userinput}>
        <form  onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input  
        type="text" 
        id="username" 
        ref={nameInputRef}
        />
        <label htmlFor="age">Age(Years)</label>
        <input 
        type="number" 
        id="age" 
        ref={ageInputRef}
        />
        <UserButton type="submit">Add User</UserButton>
        </form>
    </UserCard>
    </>
    );
}

export default UserInput;