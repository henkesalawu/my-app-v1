import React from "react";
import { AppItem } from "./AppItem";
import { List } from "semantic-ui-react";

export const AppList = ({ apps }) => {
  return (
    <List>
    <List.Item>
    {apps && apps.map((app, index) => {
        return <AppItem key={index} app={app} />;
      })}
      </List.Item>
    </List>
  )
};
