import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./styles.css";

const Lista = (props) => {
  const cadastroDataStore = useSelector(
    (store) => store.AppReducer.listaCadastro
  );

  const generate = () => {
    return cadastroDataStore.map((value, index) => {
      return (
        <ListItem key={index}>
          <ListItemText primary={value} />
        </ListItem>
      );
    });
  };

  return (
    <div className="listaDiv">
      <List>{generate()}</List>
    </div>
  );
};

export default Lista;
