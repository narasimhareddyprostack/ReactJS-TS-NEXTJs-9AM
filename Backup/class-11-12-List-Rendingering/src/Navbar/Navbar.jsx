import React from 'react'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
               <a href="/index" className='navbar-brand'>Logo</a>
               <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><a href="/index" className='nav-link'>Home</a></li>
                    <li><a href="/index" className='nav-link'>About</a></li>
                    <li><a href="/services" className='nav-link'>Services</a></li>
                   
                    
                    <li><a href="/login" className='nav-link'>Login</a></li>
                </ul>
               </div>
            </nav>
}
export default Navbar