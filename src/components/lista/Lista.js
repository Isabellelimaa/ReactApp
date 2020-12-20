import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./styles.css";

const Lista = (props) => {
  function generate(element) {
    // return props.itens.map((value) =>
    //   React.cloneElement(element, {
    //     title: value,
    //   })
    // );

    return [0, 1, 2].map((value) => React.cloneElement(element, {}));
  }
  return (
    <div className="listaDiv">
      <List>
        {generate(
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default Lista;
