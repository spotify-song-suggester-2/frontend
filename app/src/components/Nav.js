import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export default function () {
    return (
        <NavBar>
            <TheLinks to='/signup'>Sign Up</TheLinks>
            <TheLinks to='/'>Log In</TheLinks>
            <TheLinks to='/dashboard'>Dashboard</TheLinks>
            <TheLinks to='/' onClick={()=>localStorage.clear()}>Sign Out</TheLinks>
        </NavBar>
    )
}

const NavBar = styled.nav`
    border: 1px solid white;
    padding: 2%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 4%;
`;

const TheLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
`;
