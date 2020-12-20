import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";

function Home() {
  return <div className="welcomeDiv">Bem vindo</div>;
}

export default withRouter(Home);
