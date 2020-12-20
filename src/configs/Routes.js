import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./History";
import Login from "../components/login/Login";
import Cadastro from "../components/cadastro/Cadastro";
import Lista from "../components/lista/Lista";
import Home from "../scenes/home/Home";
import Menu from "../components/menu/Menu";

const Routes = () => {
  return (
    <div className="App">
      <Menu />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Lista" component={Lista} />
          <Route path="/Cadastro" component={Cadastro} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
