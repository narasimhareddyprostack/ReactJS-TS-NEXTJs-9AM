import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home';
import Admin from './components/Admin';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
  return <>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/index" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/createProduct" element={<CreateProduct/>} />
            </Routes>
          </Router>
        </>
}

export default App