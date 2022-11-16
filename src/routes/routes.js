import { Route, Routes } from "react-router-dom";

import Clinic from "../pages/clinic/Clinic";
import Dashboard from "../pages/dashboard/Dashboard";
import Endoscopy from "../pages/endoscopy/Endoscopy";
import Login from "../pages/login/Login";
import { Logout } from "@mui/icons-material";
import React from "react";
import Theatre from "../pages/theatre/Theatre";
import Ward from "../pages/ward/Ward";

const routes = (
  <Routes>
    {/* Authenication Route */}

    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="/dashboard/clinic" element={<Clinic />} />
      <Route path="/dashboard/theatre" element={<Theatre />} />
      <Route path="/dashboard/ward" element={<Ward />} />
      <Route path="/dashboard/endoscopy" element={<Endoscopy />} />
      <Route path="/dashboard/logout" element={<Logout />} />
    </Route>
  </Routes>
);

export default routes;
