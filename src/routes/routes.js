import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Clinic from "../Clinic";
import Theatre from "../Theatre";
import Ward from "../Ward";
import Endoscopy from "../Endoscopy";
import { Logout } from "@mui/icons-material";

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
