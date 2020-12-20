import React from "react";
import {
  Container,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import "./styles.css";

const Login = (props) => (
  <Container className="loginContainer">
    <FormGroup className="loginItens">
      <InputLabel>E-mail</InputLabel>
      <Input></Input>
    </FormGroup>
    <FormGroup className="loginItens">
      <InputLabel>Password</InputLabel>
      <Input></Input>
    </FormGroup>
    <Button>Entrar</Button>
  </Container>
);

export default Login;
