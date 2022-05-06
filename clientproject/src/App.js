import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom"
import { Ecommerce } from "./components/ecommerce"


function App() {
  return (
    <div className="App">
    <h1>E-Commerce</h1>
< Ecommerce></Ecommerce>
<nav
style={{borderBottom:"solid 1px",
paddingBottom: "1rem",
}}
>
  <Link to="/homepage">Homepage</Link> |{" "}
  <Link to="/login">Login</Link>
  
  
</nav>
<Outlet/>

    </div>
  );
}

export default App;
