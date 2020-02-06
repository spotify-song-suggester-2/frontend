import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export default function () {
    return (
        <NavBar>
            <HomeLink href='https://symphinity-landing.netlify.com/'>Home</HomeLink>
            <TheLinks to='/signup'>Sign Up</TheLinks>
            <TheLinks to='/'>Log In</TheLinks>
            <TheLinks to='/dashboard'>Dashboard</TheLinks>
            <TheLinks to='/' onClick={()=>localStorage.clear()}>Sign Out</TheLinks>
        </NavBar>
    )
}

const HomeLink = styled.a`
    color: white;
    text-decoration: none;
    @media(max-width: 500px){
        
        padding: 2% 0;
    }
`;

const NavBar = styled.nav`
    border: 1px solid white;
    padding: 2%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 4%;
    @media(max-width: 500px){
        flex-direction: column;
    }
`;

const TheLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
    @media(max-width: 500px){
        border-top: 1px solid white;
        padding: 2% 0;
    }
`;
