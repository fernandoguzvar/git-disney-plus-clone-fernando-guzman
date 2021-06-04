import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMovie } from "../servicios/index";

function ListarMovie() {
  const [mo, setMovie] = useState([]);
  useEffect(() => {
    async function loadMovie() {
      const datos = await getMovie();
      console.log(datos);

      if (datos.status === 200) {
        setMovie(datos.data.movie);
      }
    }

    loadMovie();
  }, []);

  return (
    <Container>
      <Letrero>
        <h5>Originales Disney+ exclusivos</h5>
      </Letrero>
      <Letrerodos>
        <p>
          Disfruta de películas, series y documentales nunca antes vistos. Solo
          en Disney+.
        </p>
      </Letrerodos>
      <Content>
        {mo.map((item) => (
          <Wrap key={item.id}>
            <img src={item.cardImg} />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default ListarMovie;

const Container = styled.div`
  margin-top: 50%;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 30px 30px 26px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  position: absolute;
  top: 250%;
  right: 1px;
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Letrero = styled.div`
  position: absolute;
  right: 440px;
  font-size: 40px;
`;

const Letrerodos = styled.p`
  position: absolute;
  margin-top: 100px;
  left: 350px;
  color: hsla(0, 0%, 75.3%, 0.8);
  font-size: 19px;
`;
