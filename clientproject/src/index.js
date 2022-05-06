import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './routes/homepage';
import Login from './routes/login';
import Jewelry from './routes/jewelry';
import Tshirts from './routes/tshirts';
import Pants from './routes/pants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="homepage" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="jewelry" element={<Jewelry />} />
        <Route path="tshirts" element={<Tshirts />} />
        <Route path="pants" element={<Pants />} />
        </Route>
      </Routes>
    </BrowserRouter>,

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

