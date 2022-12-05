import { Route, Routes } from "react-router-dom";

import Clinic from "../pages/user/clinic/Clinic";
import Dashboard from "../pages/user/dashboard/Dashboard";
import EditWardForm from "../pages/user/ward/EditWard";
import EditEndoscopyForm from "../pages/user/endoscopy/EditEndoscopy";
import EditTheatreForm from "../pages/user/theatre/EditTheatre";
import EditClinicForm from "../pages/user/clinic/EditClinic";
import Endoscopy from "../pages/user/endoscopy/Endoscopy";
import Layout from "../layout/Layout";
import Login from "../pages/user/login/Login";
import User from "../pages/admin/user/User";
import EditUserForm from "../pages/admin/user/CreateUser";
import React from "react";
import Theatre from "../pages/user/theatre/Theatre";
import Ward from "../pages/user/ward/Ward";

const routes = (
  <Routes>
    {/* Authenication Route */}

    <Route path="/" element={<Login />} />
    <Route path="/user" element={<Layout />}>
      <Route path="/user" element={<Dashboard />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
      <Route path="/user/clinic" element={<Clinic />} />
      <Route path="/user/clinic/edit/:id" element={<EditClinicForm />} />
      <Route path="/user/theatre" element={<Theatre />} />
      <Route path="/user/theatre/edit/:id" element={<EditTheatreForm />} />
      <Route path="/user/ward" element={<Ward />} />
      <Route path="/user/ward/edit/:id" element={<EditWardForm />} />
      <Route path="/user/endoscopy" element={<Endoscopy />} />
      <Route path="/user/endoscopy/edit/:id" element={<EditEndoscopyForm />} />
    </Route>
    <Route path="/admin" element={<Layout />}>
    <Route path="/admin/user" element={<User />} />
    <Route path="/admin/user/edit/:id" element={<EditUserForm />} />
    </Route>
  </Routes>
);

export default routes;
