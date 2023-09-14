import React from "react";
import { useDispatch } from "react-redux";
import {Icon, List,Button, Grid} from "semantic-ui-react";
import {deleteApp} from './contactsRedux/appActions';

export const AppItem = ({ app }) => {
  const dispatch = useDispatch();

    console.log(app)
  return (
        <Grid columns={2} stackable>
        <Grid.Column>
            <List.Header style={{color:'green'}} >
            <Icon name='user outline' color='black'/> {app.contact}</List.Header>
            <List.Content>{app.title}</List.Content>
            <p></p>
            <List.Content ><Icon name='marker'/>{app.venue}</List.Content>
        </Grid.Column>
            
        <Grid.Column textAlign="left">
        <List.Content>
        <Icon name='clock' />{app.time} 
        </List.Content>
        <p></p>
        <Icon name='calendar' />{app.date}
            </Grid.Column>
            <Button
                    labelPositon='left'
                    onClick={() => dispatch(deleteApp(app.id))}
                    size='medium'> Delete</Button>
            </Grid>
            
  )
};
