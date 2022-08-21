import * as React from "react";
import routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
