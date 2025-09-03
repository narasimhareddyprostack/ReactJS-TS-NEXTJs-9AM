import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="/index" className='navbar-brand'>Logo</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/index" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About</Link></li>
                    <li><Link to="/services" className='nav-link'>Services</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                </ul>
            </div>
         </nav>
}

export default Navbar