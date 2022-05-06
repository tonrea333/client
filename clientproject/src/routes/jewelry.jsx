import React from 'react'

import '../App.css';

export default function Jewelry() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Login</h2>
        <form>
        <label>Gold:</label><input type="text"/><br></br>
        <label>Diamonds:</label><input type="text"/>
        </form>
      </main>
    );
  }