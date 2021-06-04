import React, { useState } from "react";
import styled from "styled-components";
import Footerform from "./Footerform";
import { Addventa } from "../servicios/index";

function Formulario() {
  const [form, setForm] = useState({
    nombretar: "",
    numerotar: "",
    fechaven: "",
    cw: "",
  });

  const changeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    await Addventa(form);
  };

  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <Paso>
        <p>PASO 2 DE 2</p>
      </Paso>
      <Escribe>
        <p>Comienza a ver hoy</p>
      </Escribe>
      <Content>
        <Wrap>
          <form onSubmit={submit}>
            <input
              type="text"
              value={form.nombretar}
              onChange={(event) => {
                changeForm("nombretar", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={form.numerotar}
              onChange={(event) => {
                changeForm("numerotar", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              id="demo"
              type="text"
              placeholder="MM/AA"
              value={form.fechaven}
              onChange={(event) => {
                changeForm("fechaven", event.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              id="demouno"
              type="text"
              placeholder="CW"
              value={form.cw}
              onChange={(event) => {
                changeForm("cw", event.target.value);
              }}
            />
            <button type="submit">
              Agregar
            </button>
          </form>
        </Wrap>
        <Check>
          <input type="checkbox"></input>
        </Check>
        <Texto>
          <p>
            Guardar mis datos de pago para usarlos en otros<br></br>servicios de
            la Familia de Compañías Walt Disney.
          </p>
        </Texto>
        <Contenedor>
          <Wrapdos>
            <p>
              Al seleccionar Aceptar y suscribirse, aceptas que tu suscripción
              comenzará de inmediato. No recibirás un reembolso por las
              suscripciones mensuales o anuales si cancelas el contrato y ya
              usaste el contenido digital. Te enviaremos un aviso de renovación
              30 días antes de que entren en vigor las renovaciones anuales. Te
              cobraremos el cargo mensual o anual estándar de forma recurrente
              según tu método de pago registrado. Puedes cancelar el servicio en
              cualquier momento y la cancelación entrará en vigor cuando termine
              el período de facturación.
            </p>
          </Wrapdos>
        </Contenedor>

        <Nombretar>
          <p>NOMBRE EN LA TARJETA</p>
        </Nombretar>
        <Numerotar>
          <p>NUMERO DE LA TARJETA</p>
        </Numerotar>
        <Fecha>
          <p>FECHA DE VENCIEMIENTO</p>
        </Fecha>
        <Cw>
          <p>CODIGO DE SEGURIDAD</p>
        </Cw>

        <Unsin>
          <p>un sin fin de historias por solo COP 23.900/mes</p>
        </Unsin>

        <Cancela>
          <p>
            Cancela en cualquier momento y la cancelacion entrara en vigor al{" "}
            <br></br>
            final del periodo de facturacion
          </p>
        </Cancela>
        <Continuar>
          <a type="button" href="http://localhost:3000/login">ACEPTAR Y SUSCRIBIRSE</a>
        </Continuar>

        <Footerform />
      </Content>
    </Container>
  );
}

export default Formulario;

const Cancela = styled.div`
  position: absolute;
  font-size: 13px;
  top: 350px;
  left: 480px;
  color: rgb(202, 202, 202);
`;

const Unsin = styled.div`
  position: absolute;
  font-size: 13px;
  top: 330px;
  left: 480px;
  color: white;
`;

const Cw = styled.div`
  position: absolute;
  top: 550px;
  left: 670px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: rgb(202, 202, 202);

  &:hover {
    color: white;
  }
`;
const Fecha = styled.div`
  position: absolute;
  top: 550px;
  left: 480px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: rgb(202, 202, 202);

  &:hover {
    color: white;
  }
`;
const Numerotar = styled.div`
  position: absolute;
  top: 480px;
  left: 480px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: rgb(202, 202, 202);

  &:hover {
    color: white;
  }
`;

const Nombretar = styled.div`
  position: absolute;
  top: 410px;
  left: 480px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: rgb(202, 202, 202);

  &:hover {
    color: white;
  }
`;

const Continuar = styled.div`
  position: absolute;
  background-color: #0063e5;
  border-radius: 4px;
  text-align: center;
  height: 50px;
  width: 380px;
  padding: 10px 13px 25px;
  align-items: center;
  letter-spacing: 1.1px;
  cursor: pointer;
  position: absolute;
  top:890px;
  left: 478px;
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
  border: 1px solid transparent;
  border-radius: 10px;
  width: 390px;
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
  left: 470px;
`;

const Texto = styled.div`
  position: absolute;
  top: 655px;
  left: 480px;
  font-size: 14px;
  color: rgb(202, 202, 202);
`;

const Check = styled.div`
  cursor: pointer;
  position: absolute;
  top: 680px;
  left: 800px;
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
  top: 70%;
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

  #demo {
    width: 180px;
    padding: 17px 20px;
  }

  #demouno {
    width: 190px;
    height: 48.5px;
    position: absolute;
    top: 139px;
    left: 191px;
    padding: 17px 20px;
  }
`;
