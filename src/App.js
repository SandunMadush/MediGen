import * as React from "react";
import routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { useEffect } from 'react';

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

function Example() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}

export default App;
