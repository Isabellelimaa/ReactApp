import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Lista = (props) => {
  function generate(element) {
    return props.itens.map((value) =>
      React.cloneElement(element, {
        title: value,
      })
    );
  }
  return (
    <List>
      {generate(
        <ListItem>
          <ListItemText primary={props.title} />
        </ListItem>
      )}
    </List>
  );
};

export default Lista;
