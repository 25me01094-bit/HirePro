import React from "react"

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './index.css'
import Signup from "./pages/Signup"
import Login from "./pages/Login";
import Internship from "./pages/Internship";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Forgetpassword from "./pages/Forgetpassword";
import CompanySignup from "./pages/CompanySignup";
const App=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/internship" element={<Internship/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/forgetpassword" element={<Forgetpassword/>}/>
            <Route path="/companysignup" element={<CompanySignup/>}/>
        </Routes>
    )
}
export default App

