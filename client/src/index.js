import React from 'react'; 
import ReactDOM from 'react-dom/client';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import Routes along with Route
import App from './App';
import Success from './success'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  </BrowserRouter>
);
