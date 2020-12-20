import React from "react";
import { Container, Input, InputLabel, Button } from "@material-ui/core";

const Cadastro = (props) => (
  <Container>
    <InputLabel>Nome</InputLabel>
    <Input></Input>
    <InputLabel>E-mail</InputLabel>
    <Input></Input>
    <InputLabel>Confirm E-mail</InputLabel>
    <Input></Input>
    <InputLabel>Password</InputLabel>
    <Input></Input>
    <InputLabel>Confirm Password</InputLabel>
    <Input></Input>
    <Button>Enviar</Button>
  </Container>
);

export default Cadastro;
