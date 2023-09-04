import React from "react";
import classes from './UserButton.module.css';

function UserButton(props) {
    return (
        <userbutton
    className={classes.userbutton} 
    type={props.type || 'button'}
    onClick={props.onClick}>
    {props.children}
    </userbutton>
    );
}

export default UserButton;