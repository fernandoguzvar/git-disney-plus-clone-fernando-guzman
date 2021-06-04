import React, { useState } from "react";
import styled from "styled-components";
import Footerform from "./Footerform";
import { login } from "../servicios/index";
import { useHistory } from "react-router-dom";

function Formulario() {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  const changeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    let response = await login(form);
    // localstorage guarda en el cache del navegador y gurda usuario
    localStorage.setItem("usuario", response.data.usuario);

    if (response.data.usuario == true) {
      window.location.href = '/hnav';
    }

    //localStorage.removeItem('usuario');
  };

  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <Paso>
        <p></p>
      </Paso>
      <Escribe>
        <p>Escribe tu correo electrónico</p>
      </Escribe>
      <Content>
        <Wrap>
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="email"
              value={form.email}
              onChange={(event) => {
                changeForm("email", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="password"
              placeholder="pass"
              value={form.pass}
              onChange={(event) => {
                changeForm("pass", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <button type="submit">Agregar</button>
          </form>
        </Wrap>
        <Footerform />
      </Content>
    </Container>
  );
}

export default Formulario;

const Escribe = styled.div`
  position: absolute;
  top: 43%;
  left: 480px;
  font-weight: bold;
  font-size: 25px;
`;

const Paso = styled.div`
  position: absolute;
  top: 42%;
  left: 650px;
  color: rgb(202, 202, 202);
  cursor: inherit;
  font-size: 10px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.2px;
  line-height: 1.5;
  margin: 0px;
`;

const Container = styled.div``;

const Logo = styled.img`
  width: 170px;
  position: absolute;
  left: 577px;
  top: 120px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  position: absolute;
  top: 57%;
  left: 477px;

  input {
    background-color: rgb(49, 52, 62);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;
    width: 380px;
    backdrop-filter: blur(50px);
    border: 1px solid transparent;
    outline: none;
    transition: all 0.1s ease 0s;
    color: rgb(249, 249, 249);
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
  }
`;
