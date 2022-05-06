import React from 'react'

import '../App.css';

export default function Login() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Login</h2>
        <form>
        <label>Username:</label><input type="text"/><br></br>
        <label>Password:</label><input type="text"/>
        </form>
      </main>
    );
  }
  