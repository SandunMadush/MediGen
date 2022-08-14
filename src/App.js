import * as React from 'react';
import routes from './routes/routes';
import { BrowserRouter } from "react-router-dom";
import './App.scss'
import Login from './Login';
import Clinic from "./Clinic";
import Ward from "./Ward";
import Theatre from "./Theatre";
import Endoscopy from "./Endoscopy";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    {routes}
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route path="clinic" element={<Clinic />} />
    <Route path="theatre" element={<Theatre />} />
    <Route path="ward" element={<Ward />} />
    <Route path="endoscopy" element={<Endoscopy />} />
    <Route path="logout" element={<Logout />} />
  </Route>
</Routes>
</BrowserRouter>
     
  );
};

export default App;
