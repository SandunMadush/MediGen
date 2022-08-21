import * as React from "react";
import routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./Login";
import Clinic from "./Clinic";
import Ward from "./Ward";
import Theatre from "./Theatre";
import Endoscopy from "./Endoscopy";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
