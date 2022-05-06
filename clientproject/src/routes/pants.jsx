import React from 'react'

import '../App.css';

export default function Pants() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Login</h2>
        <form>
        <label>Leo's:</label><input type="text"/><br></br>
        <label>Anglers:</label><input type="text"/>
        </form>
      </main>
    );
  }