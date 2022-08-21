import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Clinic from "./Clinic";
import Ward from "./Ward";
import Theatre from "./Theatre";
import Endoscopy from "./Endoscopy";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

/* <BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route path="clinic" element={<Clinic />} />
    <Route path="theatre" element={<Theatre />} />
    <Route path="ward" element={<Ward />} />
    <Route path="endoscopy" element={<Endoscopy />} />
  </Route>
</Routes>
</BrowserRouter>, */
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
