import React from "react";
import styled from "styled-components";

function Componentelion() {
  return (
    <Container>
      <Wrap>
        <h3>Descarga series y películas</h3>
      </Wrap>
      <Content>
        <p>
          Descargas ilimitadas para ver lo que quieras, cuando quieras. 
          Lleva
          <br></br>
          tus historias favoritas siempre contigo, incluso sin conexión.
        </p>
      </Content>
      <Leon src="/images/leon.png" width="230%" height="200%" />
    </Container>
  );
}

export default Componentelion;

const Container = styled.div`
  position: absoulte;
  margin-top: 1000px;
  margin-left: 11px;
  align-items: center;
  padding: 250px 0px 26px;
`;

const Leon = styled.img``;

const Wrap = styled.div`
  position: absolute;
  margin-top: 250px;
  left: 700px;
  font-size: 30px;
`;

const Content = styled.div`
  position: absolute;
  margin-top: 335px;
  left: 700px;
  color: hsla(0, 0%, 75.3%, 0.8);
  font-size: 20px;
  text-align: justify;
  line-height: 1.5;
  
`;
