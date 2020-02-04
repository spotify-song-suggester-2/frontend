import React from 'react'
import {NavLink} from 'react-router-dom'

export default function () {
    return (
        <nav>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/'>Log In</NavLink>
            <NavLink to='/dashboard'>dashboard</NavLink>
        </nav>
    )
}
