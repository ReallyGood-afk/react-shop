import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Views/Index/Index"; 
import Lessions from "./Views/Lessions/Lessions"


<link rel="stylesheet" href="./index.js" />

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <ul class="header">
                <li class="header"><NavLink to="/">HACKSPLAINING</NavLink></li>
                <li><NavLink to="/features">FEATURES</NavLink></li>

                                <li><NavLink to="/lessions">LESSONS</NavLink></li>

                <li><NavLink to="/enterprise">ENTERPRISE</NavLink></li>
                <li><NavLink to="/owasp">OWASP TOP 10</NavLink></li>
                <li><NavLink to="/pci">PCI COMPLIANCE</NavLink></li>
                <li><NavLink to="/book">THE BOOK</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
                <li><NavLink to="/signup">SIGN UP</NavLink></li>          
            </ul>          
        </div>
        <div className="content">
                <Routes>
                    <Route path="/" element={<Home /> }/>
                    <Route path="/lessions" element={<Lessions /> }/>
                </Routes>   
        </div>            
        </HashRouter>
    );
  }
}
 
export default Main;