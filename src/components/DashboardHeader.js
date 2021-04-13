import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function DashboardHeader(props) {
  return (
<div>
    <nav>
      <ul>
        <ul className="ul">
        <li><Link to="/">Log out</Link></li>
        <li><Link to="/Address">Edit Restaurant's info</Link></li>
        <li><Link to="/AddMenu">Add Menu</Link></li>
        </ul>
      </ul>
    </nav>
    <br></br>

</div>
        
    );
}
  export default DashboardHeader;
