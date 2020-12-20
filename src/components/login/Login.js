import React from "react";
import { Container, Input, InputLabel, Button } from "@material-ui/core";

const Login = (props) => (
  <Container>
    <InputLabel>E-mail</InputLabel>
    <Input></Input>
    <InputLabel>Password</InputLabel>
    <Input></Input>
    <Button>Criar Conta</Button>
    <Button>Entrar</Button>
  </Container>
);

export default Login;
