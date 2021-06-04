import React, { useState } from "react";
import styled from "styled-components";
import Footerform from "./Footerform";
import { Addusuario } from "../servicios/index";

function Formulario() {
  const [form, setForm] = useState({
    email: "",
    pass: "",
    nombre: "",
  });

  const changeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    await Addusuario(form);
  };

  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <Paso>
        <p>PASO 1 DE 2</p>
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
            <input
              type="text"
              placeholder="nombre"
              value={form.nombre}
              onChange={(event) => {
                changeForm("nombre", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <button type="submit" >
              Agregar
            </button>
          </form>
        </Wrap>
        <Check>
          <input type="checkbox"></input>
        </Check>
        <Texto>
          <p>
            ¡Sí! Quiero recibir actualizaciones, ofertas especiales y otra
            <br></br>
            información de Disney+ y la Familia de Compañías Walt<br></br>{" "}
            Disney.
          </p>
        </Texto>
        <Contenedor>
          <Wrapdos>
            <p>
              Al hacer clic en Continuar, reconoces que has leído nuestra
              <br></br>
              <a href="https://www.disneyplus.com/es-419/legal/pol%C3%ADtica-de-privacidad">
                politica de privacidad
              </a>
              y que autorizas a The Walt Disney Company<br></br> (Argentina)
              S.A. a usar tus datos para personalizar y mejorar tu<br></br>{" "}
              experiencia en Disney+, enviarte información sobre Disney+ y tal{" "}
              <br></br> como se describe en nuestra{" "}
              <a href="https://www.disneyplus.com/es-419/legal/pol%C3%ADtica-de-privacidad">
                politica de privacidad
              </a>
              , incluyendo<br></br> compartirlos con la Familia de Compañías
              Walt Disney. Para más<br></br> información sobre tus derechos y
              sobre cómo ejercerlos, consulta<br></br> nuestra
              <a href="https://www.disneyplus.com/es-419/legal/pol%C3%ADtica-de-privacidad">
                politica de privacidad
              </a>
            </p>
          </Wrapdos>
          <Continuar>
            <a type="button" href="http://localhost:3000/formularioventa">
              CONTINUAR
            </a>
          </Continuar>
        </Contenedor>
        <Footerform />
      </Content>
    </Container>
  );
}

export default Formulario;



const Continuar = styled.div`
  position: absolute;
  background-color: #0063e5;
  border-radius: 4px;
  height: 50px;
  width: 90%;
  padding: 10px 134px 25px;
  align-items: center;
  letter-spacing: 1.1px;
  cursor: pointer;
  position: absolute;
  top: 70%;
  left: 20px;
  right: 0;
  buttom: 0;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: #0483ee;
  }
`;

const Wrapdos = styled.div`
  background: rgb(49, 52, 62);
  border: 1px solid transparent;
  border-radius: 10px;
  width: 380px;
  height: 240px;

  p {
    cursor: inherit;
    position: absolute;
    text-align: justify;
    left: 10px;
    top: 0px;
    font-size: 12px;
    color: rgb(202, 202, 202);
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1.5;
    text-transform: none;

    a {
      text-decoration: none;
      color: rgb(103, 189, 255);
    }
  }
`;

const Contenedor = styled.div`
  position: absolute;
  top: 700px;
  left: 475px;
`;

const Texto = styled.div`
  position: absolute;
  top: 590px;
  left: 500px;
  font-size: 14px;
  color: rgb(202, 202, 202);
`;

const Check = styled.div`
  cursor: pointer;
  position: absolute;
  top: 600px;
  left: 476px;
`;

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
  left: 480px;
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
