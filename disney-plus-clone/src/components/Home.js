import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Listarmovie from './Listarmovie';
import Login from './Login';

function Home() {

    return (
        <Container>
          <Login/>
        </Container>
    )
}


const Container = styled.main`
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 20px;

  &:after {
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home

