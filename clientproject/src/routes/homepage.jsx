import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function Homepage() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Various Application Pages</h2>
        {/* <table>
  <tr>
    <th>Tasks List</th>
    <th>Completed</th>
    <th>Incomplete</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Buy Ice Cream</td>
    <td></td>
    <td>Incomplete</td>
  </tr>
  <tr>
    <td>Walk Dog</td>
    <td>Complete</td>
    <td></td>
  </tr>
  <tr>
    <td>Return Books</td>
    <td>Complete</td>
    <td></td>
  </tr>
  <tr>
    <td>Prepare Dinner</td>
    <td></td>
    <td>Incomplete</td>
  </tr>
  <tr>
    <td>Wash Dishes</td>
    <td></td>
    <td>Incomplete</td>
  </tr>
  <tr>
    <td>Wash Dishes</td>
    <td></td>
    <td>Incomplete</td>
    <td>2 of 6</td>
  </tr>
  
</table> */}

<div>
<nav
style={{borderBottom:"solid 1px",
paddingBottom: "1rem",
}}
>
  <Link to="/jewelry">Jewelry</Link> |{" "}
  <Link to="/tshirts">Tshirts</Link> |{" "}
  <Link to="/pants">Pants</Link>
  
  
</nav>

</div>
      </main>
    );
  }
  