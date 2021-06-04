import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./card.css";
/* import smoking from "../img/smoking.png"; */
import { getDispositivo } from "../servicios/index";
function Listardipo() {
  const [products, setDispositivo] = useState([]);
  useEffect(() => {
    async function loadDispositivos() {
      const datos = await getDispositivo();
      console.log(datos);

      if (datos.status === 200) {
        setDispositivo(datos.data.dispositivo);
      }
    }

    loadDispositivos();
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Content>
          <Wrap>
            <img src={item.img} />
          </Wrap>
          <Ti>
            <p>{item.nombre}</p>
          </Ti>
          <To>
            <p>{item.descripcion}</p>
          </To>
        </Content>
      ))}
    </Container>
  );
}

export default Listardipo;

const Container = styled.div`
  margin-top: 80px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  text-align: center;
  vertical-align: 20%;
  padding: 30px 30px 26px;
`;

const Ti = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const To = styled.div`
    vertical-align: tex-top;
`