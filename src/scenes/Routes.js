import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../Configs/History";
import Login from "../Components/Login/Login";
import Cadastro from "../Components/Cadastro/Cadastro";
import Lista from "../Components/Lista/Lista";
import Menu from "../Components/Menu/Menu";
import Home from "./Home/Home";

const Routes = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Menu />
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
