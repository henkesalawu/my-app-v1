import React from "react";
import classes from './UserButton.module.css';

function UserButton(props) {
    return (
        <button
    className={classes.userbutton} 
    type={props.type || 'button'}
    onClick={props.onClick}>
    {props.children}
    </button>
    );
}

export default UserButton;