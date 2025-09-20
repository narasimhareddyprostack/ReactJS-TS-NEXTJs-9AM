import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './components/Home'
import Employees from './components/Employees';
import Login from './components/Login';
import UseMemoEX from './components/UseMemoEX';
let App=()=>{
    let mystyles={color:"blue"}
    return <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/index"  element={<Home/>}/>
                    <Route path="/employees"  element={<Employees/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/memo"  element={<UseMemoEX/>}/>
                    <Route path="*" element={<h3 style={mystyles}>404 - Page Not Found</h3>} />
                </Routes>
            </Router>
        </div>
}
export default App;