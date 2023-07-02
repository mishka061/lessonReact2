import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1>навигационная панель</h1>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
            <div className='content'></div>
        </div>
    )
}
