import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'

const Display = ()=>{
    return  (
<BrowserRouter>
<Routes>
    <Route path="/" element={<App/>}/>
</Routes>
</BrowserRouter>
    
    )
}

export default Display