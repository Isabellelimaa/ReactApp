import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";

const Menu = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">MyApp</Typography>
      <div className="itensDiv">
        <Link to="/Cadastro" className="itens">
          Criar Conta
        </Link>
        <Link to="/Login" className="itens">
          Acessar
        </Link>
        <Link to="/Lista" className="itens">
          Lista
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default Menu;
