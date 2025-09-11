import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
           <NavLink to="/index" className="navbar-brand">Logo</NavLink>
            <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><NavLink to="/index" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
                <li><NavLink to="/admin" className="nav-link">Admin</NavLink></li>
            </ul>
            </div>
        </nav>
}

export default Navbar