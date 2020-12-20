import React from "react";
import {
  Container,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import "./styles.css";

const Cadastro = (props) => (
  <Container className="cadastroContainer">
    <FormGroup className="cadastroItens">
      <InputLabel>Nome</InputLabel>
      <Input type="text" required></Input>
    </FormGroup>
    <FormGroup className="cadastroItens">
      <InputLabel>E-mail</InputLabel>
      <Input type="email" required></Input>
    </FormGroup>
    <FormGroup className="cadastroItens">
      <InputLabel>Confirme o e-mail</InputLabel>
      <Input type="email" required></Input>
    </FormGroup>
    <FormGroup className="cadastroItens">
      <InputLabel>Senha</InputLabel>
      <Input type="password" required></Input>
    </FormGroup>
    <FormGroup className="cadastroItens">
      <InputLabel>Confirme a senha</InputLabel>
      <Input type="password" required></Input>
    </FormGroup>
    <Button>Enviar</Button>
  </Container>
);

export default Cadastro;
