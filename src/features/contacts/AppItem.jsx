import React from "react";
import {Icon, List,Button, Grid} from "semantic-ui-react";

export const AppItem = ({ app }) => {
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
                    color='green'
                    size='medium'>Update</Button>
            <Button
                    labelPositon='left'
                    size='medium'> Delete</Button>
            </Grid>
            
  )
};
