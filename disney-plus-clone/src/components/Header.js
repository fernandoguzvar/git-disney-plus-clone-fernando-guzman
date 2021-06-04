import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {localStorage.getItem("usuario") == false ||
      localStorage.getItem("usuario") == null ? (
        <Logincontainer>
          <Login><a href="http://localhost:3000/formulariologin">iniciar sesion</a></Login>
        </Logincontainer>
      ) : (
        <>
          <NavMenu>
            <a href="/hnav">
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a href="/listarmovieoriginal">
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a href="/Listarmovie">
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a href="/listarmovieserie">
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src="https://scontent.feyp1-1.fna.fbcdn.net/v/t1.6435-9/181468354_1419077755093495_2375259553724569901_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wdqwumktmu8AX_xNsbv&_nc_ht=scontent.feyp1-1.fna&oh=658f3d08faf44dd00db8c4c814813a68&oe=60DD4DF9" onClick={logout} />
        </>
      )}
    </Nav>
  );
}

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "/login";
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 13 px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const Logincontainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  a{
    color:white;
    text-decoration: none;
  }
`;
