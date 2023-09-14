import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserList from './components/UserList';

import { Container } from "semantic-ui-react";



function UserApp() {
    const [usersList, setUsersList] = useState([]);


    const handleData = (userName, userAge) => {
        setUsersList((prevList) => {
            return [
                ...prevList, 
                {name: userName, age: userAge, id: Math.random().toString()}
            ];
        });
        console.log(usersList)
    };

    return (
      <React.Fragment>
      <Container className="main">
       <UserInput onAddUser={handleData} />
       <UserList users={usersList}/>
       </Container>
    </React.Fragment>
    );
}

export default UserApp;