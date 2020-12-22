import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  FormGroup,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import "./styles.css";

import { setListaCadastro } from "../../Redux/AppReducers/AppReducers";

const Cadastro = (props) => {
  const [cadastro, setCadastro] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setListaCadastro(cadastro.nome));
  };

  const handleChange = (e) => {
    setCadastro({
      ...cadastro,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className="cadastroContainer">
      <FormGroup className="cadastroItens">
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          name="nome"
          value={cadastro.nome}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>
      <FormGroup className="cadastroItens">
        <InputLabel>E-mail</InputLabel>
        <Input
          type="email"
          name="email"
          value={cadastro.email}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>
      <FormGroup className="cadastroItens">
        <InputLabel>Confirme o e-mail</InputLabel>
        <Input
          type="email"
          name="cEmail"
          value={cadastro.cEmail}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>
      <FormGroup className="cadastroItens">
        <InputLabel>Senha</InputLabel>
        <Input
          type="password"
          name="senha"
          value={cadastro.senha}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>
      <FormGroup className="cadastroItens">
        <InputLabel>Confirme a senha</InputLabel>
        <Input
          type="password"
          name="cSenha"
          value={cadastro.cSenha}
          onChange={handleChange}
          required
        ></Input>
      </FormGroup>
      <Button onClick={handleSubmit}>Enviar</Button>
    </Container>
  );
};

export default Cadastro;
