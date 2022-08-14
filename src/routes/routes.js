import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../Login";


const routes = (

  <Routes>

    {/* Authenication Route */}

    <Route path="/" element={<Login/>} />
    <Route path="/navbar" element={<Navbar/>} />

  </Routes>

);



export default routes;