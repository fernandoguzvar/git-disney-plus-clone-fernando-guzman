import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function Detail() {
  const { id_movie } = useParams();
  console.log(id_movie);

  const [movi, setInfoMovie] = useState([]);
  useEffect(() => {
    async function loadInfo() {
      const datos = await axios.get(
        `http://localhost:4000/movie/view_listar_movie_id/${id_movie}`
      );
      console.log(datos);
      if (datos.status === 200) {
        setInfoMovie(datos.data.movie);
      }
    }
    loadInfo();
  }, []);

  return (
    <Container>
     {movi.map((item)=>(
       <>
       <Background>
         <img src={item.backgroundImg} />
       </Background>
       <ImageTitle>
         <img src={item.titleImg} />
       </ImageTitle>
       <Controls>
         <PlayButton>
           <img src="/images/play-icon-black.png" />
           <span><a href={item.linkp}>PLAY</a></span>
         </PlayButton>

         <TrailerButton>
           <img src="/images/play-icon-white.png" />
           <span><a href={item.link}>TRAILER</a></span>
         </TrailerButton>

         <AddButton>
           <span>+</span>
         </AddButton>

         <GroupWatchButton>
           <img src="/images/group-icon.png" />
         </GroupWatchButton>
       </Controls>
       <SubTitle>{item.subTitle}</SubTitle>
       <Description>{item.description}</Description>
     </>
     ))}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 10vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 350px;
    min-width: 350px;
    width: 35vw;
    height: 21vh;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  a{
    text-decoration: none;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

  a{
    color:white;
    text-decoration:none;

  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
