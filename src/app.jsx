import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import Signup from "./pages/signup"
import Landing from './pages/landing'
import { useState } from "react";

function App(){

    const[userdata, setuserdata]= useState([
        {
            username: "emc",
            password:"log123"
        },

        {
            username: "vino",
            password:"vino26"
        }
    ])
   
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login userdata={userdata} setuserdata={setuserdata}/>}></Route>
            <Route path="/signup" element={<Signup userdata={userdata} setuserdata={setuserdata}/>}></Route>
            <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;