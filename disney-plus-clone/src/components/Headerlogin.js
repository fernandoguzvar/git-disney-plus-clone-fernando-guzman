import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>  
            <NavMenu>
                <a>
                    
                </a>
                <a>
                  
                </a>
                <a>
                    
                </a>
                <a>
                    
                </a>
                <a>
                  
                </a>
                <a>
                    
                </a>
            </NavMenu>
            <UserImg src="https://scontent.fbog16-1.fna.fbcdn.net/v/t1.6435-9/181468354_1419077755093495_2375259553724569901_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHXn5Na9PtWXCiF8LiqHGoxC-aou6HQMRUL5qi7odAxFbyQQObXcf1igtlnuqvkvaSxyAjFtSujAnh2rrIdguy4&_nc_ohc=YHuG4RxXgwwAX-As8dT&_nc_ht=scontent.fbog16-1.fna&oh=ec99538c9a2cc7b5b43967946b68306e&oe=60D564F9"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
`

const Logo = styled.img`
    width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left: 25px; 
    align-items:center; 

    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height:20px;
        }

        span{
            font-size: 13 px;
            letter-spacing: 1.42px;
            position:relative;

            &:after {
                content:"";
                height: 2px;
                background:white;
                position:absolute;
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
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%; 
    cursor: pointer; 
`