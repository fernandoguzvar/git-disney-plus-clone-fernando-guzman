import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <Content>
        <a href="https://www.disneyplus.com/es-419/legal/pol%C3%ADtica-de-privacidad">
          <span>Politica de privacidad</span>
        </a>
        <a href="https://www.disneyplus.com/es-419/legal/acuerdo-de-suscripci%C3%B3n">
          <span>Acuerdo de suscripción</span>
        </a>
        <a href="https://help.disneyplus.com/">
          <span>ayuda</span>
        </a>
        <a href="https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=eac89167db3048900a2af56e0f96193b">
          <span>Dispositivos compatibles</span>
        </a>
        <Segundo>
          <a href="https://help.disneyplus.com/csp">
            <span>Acerca de Disney+</span>
          </a>

          <a href="https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus">
            <span>Publicidad personalizada</span>
          </a>
        </Segundo>
        <Discon>
          <p>
            Disney+ es un servicio por suscripción de pago, su contenido está
            sujeto a disponibilidad. El<br></br> servicio Disney+ es
            comercializado por The Walt Disney Company Colombia S.A, Carrera 50
            <br></br> No. 17 – 77 Bogotá D.C. y número de NIT es 800.236.937-1
          </p>
        </Discon>
        <Dis>
          <p>© 2021 Disney. Todos los derechos reservados.</p>
        </Dis>
      </Content>
    </Container>
  );
}

export default Footer;

const Segundo = styled.div`
position: absolute;
top:10%;
left:500px;

display:flex;

a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  text-decoration:none;



  span {
    font-size: 13px;
    letter-spacing: 1.1px;
    position: relative;
    margin-top:80px;
    color:white;

`;

const Discon = styled.div`
  position: absolute;
  top: 150px;
  left: 390px;
  text-align: justify;
  font-size: 12px;
  letter-spacing:1.0px;
`;

const Dis = styled.div`
  position: absolute;
  top: 200px;
  left: 520px;
`;

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 180%;
  background: #090b13;
  width: 100%;
  height: 41%;
`;

const Logo = styled.img`
  width: 80px;
  position: absolute;
  left: 650px;
  top: 20px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  margin-left: 380px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration:none;

  

    span {
      font-size: 12px;
      letter-spacing: 1.1px;
      position: relative;
      margin-top:80px;
      color:white;

   

    
`;
