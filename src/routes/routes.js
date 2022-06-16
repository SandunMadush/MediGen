import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";


const routes = (

  <Routes>

    {/* Authenication Route */}

    <Route path="/" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />

  </Routes>

);



export default routes;