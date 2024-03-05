



import React from 'react'
import { NavLink } from "react-router-dom";


function Slide() {
    return (
        <ul className="sidebar">
            <li>
                <NavLink to="/dashboard" className="Navlink1">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="add/newpost" className="Navlink1">Add New Post</NavLink>
            </li>
            <li>
                <NavLink to="product/edit" className="Navlink1">Edit Product</NavLink>
            </li>
            
        </ul>
    )
}

export default Slide