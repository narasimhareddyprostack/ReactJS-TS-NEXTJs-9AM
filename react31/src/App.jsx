import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact'
let App=()=>{
    let mystyles={color:"blue"}
    return <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/index"  element={<Home/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/services"  element={<Services/>} />
                    <Route path="/contact"  element={<Contact/>} />
                    <Route path="*" element={<h3 style={mystyles}>404 - Page Not Found</h3>} />
                </Routes>
            </Router>
        </div>
}
export default App;