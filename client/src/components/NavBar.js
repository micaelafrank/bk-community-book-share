import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <NavLink className="navItem" to="/login">Sign In</NavLink>
            <NavLink className="navItem" to="/signup">Create Account</NavLink>
            <NavLink className="navItem" exact to="/">Home</NavLink>
            <NavLink className="navItem" to="/books">Books</NavLink>
            <NavLink className="navItem" to="/me">Profile</NavLink>
            <NavLink className="navItem" to="/user">Members</NavLink>
            <NavLink className="navItem" to="/logout">Sign Out</NavLink>
        </nav>
)}

export default NavBar; 