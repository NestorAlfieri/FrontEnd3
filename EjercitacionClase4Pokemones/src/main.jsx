import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
//import WelcomeComponent from './welcome/App'; //default
import  App  from "./welcome/App"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
