import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
                    <NavLink to="/index" className='navbar-brand'>Logo</NavLink>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li><NavLink to="/index" className='nav-link'>Home</NavLink></li>
                            <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
                            <li><NavLink to="/services" className='nav-link'>Services</NavLink></li>
                            <li><NavLink to="/contact" className='nav-link'>Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
}

export default Navbar