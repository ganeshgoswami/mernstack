import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {AuthAdminProvider} from "./adminContext/adminContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <AuthAdminProvider>
    <App />
    </AuthAdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
