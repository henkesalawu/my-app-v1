import React from "react";
import classes from './UserCard.module.css';

function UserCard(props) {
    return <div className={`${classes.usercard} ${props.className}`}>{props.children}</div>;
};

export default UserCard;