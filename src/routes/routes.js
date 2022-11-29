import { Route, Routes } from "react-router-dom";

import Clinic from "../pages/clinic/Clinic";
import Dashboard from "../pages/dashboard/Dashboard";
import EditWardForm from "../pages/ward/EditWard";
import EditEndoscopyForm from "../pages/endoscopy/EditEndoscopy";
import Endoscopy from "../pages/endoscopy/Endoscopy";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import React from "react";
import Theatre from "../pages/theatre/Theatre";
import Ward from "../pages/ward/Ward";

const routes = (
  <Routes>
    {/* Authenication Route */}

    <Route path="/" element={<Login />} />
    <Route path="/user" element={<Layout />}>
      <Route path="/user" element={<Dashboard />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
      <Route path="/user/clinic" element={<Clinic />} />
      <Route path="/user/theatre" element={<Theatre />} />
      <Route path="/user/ward" element={<Ward />} />
      <Route path="/user/ward/edit/:id" element={<EditWardForm />} />
      <Route path="/user/endoscopy" element={<Endoscopy />} />
      <Route path="/user/endoscopy/edit/:id" element={<EditEndoscopyForm />} />
    </Route>
  </Routes>
);

export default routes;
