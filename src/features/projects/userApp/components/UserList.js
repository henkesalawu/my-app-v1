import React from "react";
import UserCard from "./UserCard";
import classes from './UserList.module.css';

function UserList({users}) {
    return (
        <UserCard className={classes.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                    {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </UserCard> 
    )
}

export default UserList;