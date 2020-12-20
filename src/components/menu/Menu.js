import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Menu = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">MyApp</Typography>
      <Link to="/study">Criar Conta</Link>
    </Toolbar>
  </AppBar>
);

export default Menu;
