import "./App.scss";

import * as React from "react";

import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
