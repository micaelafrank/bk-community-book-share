import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <h2>Plot Luck</h2>
            <p>A free community-centered book exchange</p>
            <NavLink className="navItem" exact to="/">Home</NavLink>
            <NavLink className="navItem" to="/books">Books</NavLink>
            <NavLink className="navItem" to="/me">Profile</NavLink>
            <NavLink className="navItem" to="/user">Members</NavLink>
            <NavLink className="navItem" to="/logout">Sign Out</NavLink>
        </nav>
)}

export default NavBar; 