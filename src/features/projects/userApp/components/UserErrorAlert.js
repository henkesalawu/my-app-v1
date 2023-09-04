import React from "react";
import ReactDOM from 'react-dom';
import UserCard from "./UserCard";
import UserButton from "./UserButton";
import classes from './UserErrorAlert.module.css';

//modal overlay other
const Backdrop = (props) => {
    return <div className={classes.userbackdrop} onClick={props.onConfirm} />;
}
const ModalOverlay = (props) => {
    return (
    <UserCard className={classes.usermodal}>
        <userheader className={classes.userheader}>
         <h2>{props.usertitle}</h2>
        </userheader>
        <div className={classes.usercontent}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.useractions}>
            <UserButton onClick={props.onConfirm}>Okay</UserButton>
        </footer>
    </UserCard>
    );
;}

function UserErrorAlert(props) {
    return (
        <React.Fragment>
           {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />, 
            document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default UserErrorAlert;