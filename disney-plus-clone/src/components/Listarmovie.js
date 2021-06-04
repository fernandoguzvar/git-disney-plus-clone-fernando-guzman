import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <h4>RECOMENDADOS PARA TI</h4>
      <Content>
        {mo.map((item) => (
          <Wrap key={item.id}>
            <Link to={`/detail/${item.id_movie}`}>
              <img src={item.cardImg} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default ListarMovie;

const Container = styled.div`
  padding: 30px 30px 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
