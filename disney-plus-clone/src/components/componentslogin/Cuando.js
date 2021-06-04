import React from "react";
import styled from "styled-components";

function Cuando() {
  return (
    <Container>
      <Wrap>
        <Title>CUANDO QUIERAS DONDE QUIERAS</Title>
      </Wrap>
      <Wrap>
        <Description>
          Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta,
          computadora, teléfono y otros. Vive una experiencia única con una
          amplia selección de títulos en 4K. Además, puedes ver en cuatro
          pantallas en simultáneo para que nadie se quede afuera.
        </Description>
      </Wrap>
      <Wrap>
        <Imgcuando src="/images/cuando.png" width="650px" height="546.36px" />
      </Wrap>
    </Container>
  );
}

export default Cuando;

const Container = styled.div`
  margin-top: 20%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top:30%;
`;

const Description = styled.div`
  font-size: 20px;
`;

const Wrap = styled.div`
  margin-top: 10px;
`;

const Imgcuando = styled.img`
  position: absolute;
  content: "";
  top:110%;
  bottom: 0;
  left: 50%;
  right:0;
`;
