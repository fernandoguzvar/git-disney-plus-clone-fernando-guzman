import React from "react";
import styled from "styled-components";
import Cuando from "./componentslogin/Cuando";
import Listarmovielogin from "./Listarmovielogin";
import Componentelion from "./componentslogin/Componentelion";
import Componentesinfin from "./Componentesinfin";
import Dispositivo from "../pages/Dispositivo";
import Footer from "./Footer";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/logo.svg" width="200px" height="200px" />
        <Letrero>Las mejores historias, en un mismo lugar.</Letrero>
        <B>
          <Span>COP 23.900/mes*</Span>
          <Singup> <a href="http://localhost:3000/formulario">SUSCRIBETE AHORA</a></Singup>
          <Spandos>COP 239.900/año*</Spandos>
          <Singupdos> <a href="http://localhost:3000/formulario">SUSCRIBETE AHORA</a></Singupdos>
        </B>
        <Description>
          *El precio podría variar en otras plataformas. Podrían aplicar cargos
          de terceros no asociados a Disney.
        </Description>
        <CTALogotwo src="/images/cta-logo-two.png" width="100%" height="100%" />

        <Cuando />
        <Listarmovielogin />
        <Componentelion />
        <Componentesinfin />
        <Dispositivo />
        <Letre>Disponible en tus dispositivos favoritos</Letre>
        <Footer/>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  max-height: 400px;
  padding: 30px 50px 26px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CTALogoOne = styled.img``;

const B = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 30px 0px 26px;
  justify-content: center;
`;

const Singup = styled.a`
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 15px;
  padding: 10px 25px 25px;
  align-items: center;
  height: 40px;
  width: 40%;
  letter-spacing: 1.1px;
  cursor: pointer;
  position: absolute;
  top: 80%;
  left: 0;
  right: 0;
  buttom: 0;

  a{
    color:white;
    text-decoration:none;
  }

  &:hover {
    background: #0483ee;
  }
`;

const Span = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 0%;
  width: 100%;
`;

const Spandos = styled(Span)`
  font-weight: bold;
  font-size: 20px;
  width:20%
  margin-right:10px;
  
`;

const Singupdos = styled.div`
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 15px;
  padding: 10px 25px 25px;
  align-items: center;
  height: 40px;
  width: 40%;
  letter-spacing: 1.1px;
  cursor: pointer;
  position: absolute;
  top: 80%;
  left: 50%;
  right: 0;
  buttom: 0;

  a{
    color:white;
    text-decoration:none;
  }

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: justify;
  line-height: 1.5;
  margin-right: 22px;
  display: flex;
  margin-top: 10%;
`;

const Letrero = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
`;

const CTALogotwo = styled.img`
  margin-top: 50px;
`;

const Letre = styled.div`

  font-size: 40px;
  position: absolute;
  top:780%;
  left:320px;
  font-weight:bold;

`