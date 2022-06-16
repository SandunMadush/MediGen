import * as React from 'react';
import routes from './routes/routes';
import { BrowserRouter } from "react-router-dom";
import './App.scss'
import Login from './Login';


function App() {
  return (
    
    <BrowserRouter>
    {routes}
    </BrowserRouter>
     
  );
};

export default App;
