import React from 'react'
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services'
import Products from './components/Products'
const App = () => {
  return <div>
          <Router>
              <Navbar/>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/index" component={Home}/>
                <Route path="/products" component={Products}/>
              </Switch>
          </Router>
          
        </div>
}
export default App;